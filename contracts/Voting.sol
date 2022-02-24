// "SPDX-License-Identifier: UNLICENSED"
pragma solidity ^0.8.0;

contract MyBallot{
    
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    struct Voter{
        address _address;
        bool voted;
    }

    struct Ballot {
        Candidate[] candidates;
        Voter[] voters;
        uint256 winningCandidateId;
        uint256 candidatesCount;
    }

    address public owner;
    uint256 public ActiveBallotId;
    // BallotId => Ballot
    mapping (uint256 => Ballot) public ballot;

    // BallotId => votecount
    mapping (uint256 => uint256) public winningVoteCount;
    // BallotId => WinningCandidateId
    mapping(uint256 => uint256) public winningCandidateId;

    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(uint256 => mapping(address => bool)) public isVoter;
    mapping(uint256 => mapping (uint256 => bool)) public isCandidate;

    constructor() {
        ActiveBallotId = 1;
        owner = msg.sender;
    }

    function addCandidate(string memory _name) public {
        require(msg.sender == owner);
        Ballot storage activeBallot = ballot[ActiveBallotId];
        Candidate memory newCandidate = Candidate({
            id : activeBallot.candidatesCount,
            name : _name,
            voteCount : 0
        });
        
        activeBallot.candidates.push(newCandidate);
    }

    function addVoter(address _address) public {
        require(msg.sender == owner);
        Ballot storage activeBallot = ballot[ActiveBallotId];
        Voter memory newVoter = Voter({
            _address : _address,
            voted: false
        });
        isVoter[ActiveBallotId][_address] = true;
        activeBallot.voters.push(newVoter);
    }
    
    function getCandidateNameById(uint256 candidateId) public view returns (string memory _candidateName) {
        Ballot storage presentBallot = ballot[ActiveBallotId];
        return presentBallot.candidates[candidateId].name;
    }

    function vote(uint256 candidateId) public {
        Ballot storage presentBallot = ballot[ActiveBallotId];
        require(isVoter[ActiveBallotId][msg.sender]);
        require(!hasVoted[ActiveBallotId][msg.sender]);

        presentBallot.candidates[candidateId].voteCount += 1;

        if ( presentBallot.candidates[candidateId].voteCount > winningVoteCount[ActiveBallotId] ) {
            winningCandidateId[ActiveBallotId] = candidateId;
            winningVoteCount[ActiveBallotId] = presentBallot.candidates[candidateId].voteCount;
        }
        hasVoted[ActiveBallotId][msg.sender] = true;
    }

    function endVote() public {
        require(msg.sender == owner);
        ActiveBallotId += 1;
    }
}