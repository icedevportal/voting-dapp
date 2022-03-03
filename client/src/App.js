import './App.css';
import React, { useEffect, useState } from 'react';
import myBallot from './contractAbi/abi';
import Web3 from 'web3';
import Header from './components/Header';
import VotingForm from './components/VotingForm';
import CandidateList from './components/CandidateList';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loader from './components/Loader';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

function App() {
  const [account, setAccount] = useState('');
  const [votingContract, setVotingContract] = useState({});
  const [candidateDetails, setcandidateDetails] = useState([])
  const [isVoter, setIsVoter] = useState(false);
  const [contractOwner, setContractOwner] = useState('');
  const [loading, setLoading] = useState(false);
  const [voteStatus, setVoteStatus] = useState(false);
  const [alert, setAlert] = useState({
    openAlert: false,
    alertType: '',
    alertMessage: ''
  })
  const [winningCandidate, setWinningCandidate] = useState({});

  const { openAlert, alertType, alertMessage } = alert;

  const login = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
  }

  const getRegisterStatus = async (voting) => {
    const isVoterFlag = await voting.methods.isVoter(account).call();
    setIsVoter(isVoterFlag);
  }

  const getCandidate = async (voting, balId) => {
    let candidates = []
    try {
      const candidatesCount = await voting.methods.candidatesCount().call();
      const candidatesId = await voting.methods.getCandidatesId().call();
      for (let i = 0; i < candidatesCount; i++) {
        const candidate = await voting.methods.candidates(candidatesId[i]).call();
        candidates.push({
          id: candidate.id,
          name: candidate.name,
          voteCount: candidate.voteCount
        })
      }
      setcandidateDetails(candidates);
      
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  const addCandidate = async (cName) => {
    try {
      setLoading(true);
      const addCandidateTx = await votingContract.methods.addCandidate(cName).send({ from: account});
      console.log(addCandidateTx)
      if(addCandidateTx.transactionHash) {
        getCandidate(votingContract);
        console.log(`tx hash: ${addCandidateTx.transactionHash}`);
        console.log('Added candidate');
        setLoading(false);
        setAlert({
          ...alert,
          openAlert: true,
          alertType: 'success',
          alertMessage: 'Candidate Added Successfully'
        })
      }
    } catch (error) {
      setLoading(false);
      setAlert({
        ...alert,
        openAlert: true,
        alertType: 'error',
        alertMessage: 'Error Adding Candidate'
      });
      console.log(error);
    }
  }

  const addVoter = async (address) => {
    if(contractOwner == account) {
      setLoading(true);
      try {
        const addVoterTx = await votingContract.methods.addVoter(address).send({ from: account });
        if(addVoterTx.transactionHash) {
          getRegisterStatus(votingContract);
          console.log('Voter Added');
          setLoading(false);
          setAlert({
            ...alert,
            openAlert: true,
            alertType: 'success',
            alertMessage: 'Voter Registered Successfully'
          })
        } 
      } catch (error) {
        setLoading(false);
        setAlert({
          ...alert,
          openAlert: true,
          alertType: 'error',
          alertMessage: 'Error Adding Voters'
        })
        console.log(`Error: ${error}`)
      }
    } else {
      setAlert({
        ...alert,
        openAlert: true,
        alertType: 'error',
        alertMessage: 'Only contract owner can add voters'
      })
      console.log('Only contract owner can add voters')
    }
  }

  const vote = async (id) => {
    setLoading(true);
    const hasVoted = await votingContract.methods.hasVoted(account).call();
    if(hasVoted) {
      setLoading(false);
      setAlert({
        ...alert,
        openAlert: true,
        alertType: 'error',
        alertMessage: 'Already Casted Vote'
      })
      console.log('Already voted');
      return;
    }
    if(!isVoter) {
      setLoading(false);
      setAlert({
        ...alert,
        openAlert: true,
        alertType: 'error',
        alertMessage: 'Voter is not registered'
      })
      console.log('Voter not registered');
      return;
    }
    try {
      const voteTx = await votingContract.methods.vote(id).send({ from: account });
      if(voteTx.transactionHash) {
        getCandidate(votingContract);
        console.log('voted');
        setLoading(false);
        setAlert({
          ...alert,
          openAlert: true,
          alertType: 'success',
          alertMessage: 'Vote casted Successfully'
        })
      }
    } catch (error) {
      setLoading(false);
      setAlert({
        ...alert,
        openAlert: true,
        alertType: 'error',
        alertMessage: 'Error Casting Vote'
      })
      console.log(`Error: ${error}`);
    }
  }

  const getWinner = async () => {
    try {
      setLoading(true)
      const winningCandidateId = await votingContract.methods.winningCandidateId().call();
      const winner = candidateDetails.find(item => item.id == winningCandidateId);
      console.log(winner);
      const endVoteTx = await votingContract.methods.endVote().send({ from: account });
      if(endVoteTx.transactionHash) {
        setWinningCandidate(winner)
        const hasVoteEnded = await votingContract.methods.isVoteEnded().call();
        setVoteStatus(hasVoteEnded);
        setLoading(false);

        setAlert({
          ...alert,
          openAlert: true,
          alertType: 'success',
          alertMessage: 'Voting ended Successfully'
        })
      }
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      setAlert({
        ...alert,
        openAlert: true,
        alertType: 'error',
        alertMessage: 'error in ending vote'
      })
    }
    
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const closeAlert = () => {
    setAlert({
      ...alert,
      openAlert: false,
      alertType: '',
      alertMessage: ''
    })
  }

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
        console.log('metamask not detected')
        return;
      }

      try {
        const voting = new window.web3.eth.Contract(myBallot.abi,contractAddress);
        const getOwner = await voting.methods.owner().call();
        const hasVoteEnded = await voting.methods.isVoteEnded().call();


        getRegisterStatus(voting);

        setContractOwner(getOwner.toLowerCase());
        setVoteStatus(hasVoteEnded);

        getCandidate(voting);
        
        setVotingContract(voting);
      } catch (error) {
        console.log(error)
      }
      
    }
    init();
    initializeVotingContract();

    window.ethereum.on('accountsChanged', () => {
      login()
    });
    
  }, [account, voteStatus]);
  return (
    <div className="App">
      <Header account={account} voteStatus={voteStatus} />
      {contractOwner == account && (
        <VotingForm addCandidate={addCandidate} addVoter={addVoter} getWinner={getWinner} />
      )}
      <CandidateList vote={vote}  candidateDetails={candidateDetails} isVoter={isVoter} account={account} contractOwner={contractOwner} winningCandidate={winningCandidate} />
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openAlert} autoHideDuration={3000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <Loader loading={loading} />

    </div>
  );
}

export default App;
