import './App.css';
import { useEffect, useState } from 'react';
import myBallot from './contractAbi/abi';
import Web3 from 'web3';
import Header from './components/Header';
import VotingForm from './components/VotingForm';
import CandidateList from './components/CandidateList';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

function App() {
  const [account, setAccount] = useState('');
  const [votingContract, setVotingContract] = useState({});
  const [candidateDetails, setcandidateDetails] = useState([])
  const [totalVoteCount, setTotalVoteCount] = useState(0);
  const [isVoter, setIsVoter] = useState(false);
  const [ballotId, setBallotId] = useState();
  const [contractOwner, setContractOwner] = useState('');

  const login = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
  }

  const getRegisterStatus = async (voting, balId) => {
    const isVoterFlag = await voting.methods.isVoter(balId,account).call();
    setIsVoter(isVoterFlag);
  }

  const getCandidate = async (voting, balId) => {
    let candidates = []
    try {
      const candidatesCount = await voting.methods.ballot(balId).call();
      for (let i = 0; i < candidatesCount; i++) {
        const candidate = await voting.methods.getCandidateNameById(i).call();
        const voteCount = await voting.methods.winningVoteCount(i).call();
        candidates.push({
          id: i,
          name: candidate,
          voteCount
        })
      }
      setcandidateDetails(candidates);
      
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  const addCandidate = async (cName) => {
    try {
      const addCandidateTx = await votingContract.methods.addCandidate(cName).send({ from: account});
      console.log(addCandidateTx)
      if(addCandidateTx.transactionHash) {
        console.log(`tx hash: ${addCandidateTx.transactionHash}`);
        console.log('Added candidate');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addVoter = async (address) => {
    if(contractOwner == account) {
      try {
        const addVoterTx = await votingContract.methods.addVoter(address).send({ from: account });
        if(addVoterTx.transactionHash) {
          getRegisterStatus(votingContract, ballotId);
          console.log('Voter Added');
        } 
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    } else {
      console.log('Only contract owner can add voters')
    }
  }

  console.log(account,":acc")

  useEffect(() => {
    async function init() {
      if(window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        login();
      } else {
        console.log('Metamask not installed!')
      }
    }
    async function initializeVotingContract() {
      if(window.ethereum ==  undefined) {
        return;
      }

      const voting = new window.web3.eth.Contract(myBallot.abi,contractAddress);
      const ballotIdQuery = await voting.methods.ActiveBallotId().call();
      const getOwner = await voting.methods.owner().call();
      console.log(getOwner,":owner")

      getRegisterStatus(voting,ballotIdQuery);
      setBallotId(ballotIdQuery)
      setContractOwner(getOwner.toLowerCase());

      getCandidate(voting, ballotIdQuery);
      
      setVotingContract(voting);
      
    }
    init();
    initializeVotingContract();

    window.ethereum.on('accountsChanged', () => {
      login()
    });
    
  }, [totalVoteCount, account])
  return (
    <div className="App">
      <Header account={account} />
      {contractOwner == account && (
        <VotingForm addCandidate={addCandidate} addVoter={addVoter} />
      )}
      <CandidateList  candidateDetails={candidateDetails} isVoter={isVoter} />
    </div>
  );
}

export default App;
