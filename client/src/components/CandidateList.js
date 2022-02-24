import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import { flexbox } from '@mui/system';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const useStyles = makeStyles({
    votingDetails: {
        margin: '20px 0'
    },
    votingDetailsTitle: {
           textAlign: 'center',
    
    },
    candidateInfo : {
        width: '90%',
        margin: '30px auto',
        display: 'flex',
        gap: '5rem'
    },
    voterStatus: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    registerBtn : {
        textTransform: 'capitalize !important',
        marginTop: '20px !important'
    },
    registered: {
        color: '#2e7d32',
    },
    notRegistered: {
        color: '#d32f2f'
    },
});

const CandidateList = ({ candidateDetails, isVoter, castVote }) => {
    const css = useStyles();

    const handleRegistration = async () => {
        // registerVoter();
    }
  return (
    <div className={css.votingDetails}>
        <h3 className={css.votingDetailsTitle}>Voting Details</h3>
        <div className={css.candidateInfo}>
            <div className={css.candidateTable}>
                <h3 style={{ marginBottom: 10 }}>Candidate List</h3>
                <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
                    <Table sx={{ minWidth: 400 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>ID</StyledTableCell>
                          <StyledTableCell >Candidate Name</StyledTableCell>
                          <StyledTableCell >Vote Count</StyledTableCell>
                          <StyledTableCell >Vote</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {candidateDetails?.map((row) => (
                          <StyledTableRow key={row.id}>
                            <StyledTableCell >{row.id}</StyledTableCell>
                            <StyledTableCell>
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell >{row.voteCount}</StyledTableCell>
                            <StyledTableCell >
                                <Tooltip title="Vote">
                                    <IconButton onClick={() => castVote(row.id)}>
                                        <HowToVoteIcon />
                                    </IconButton>
                                </Tooltip>
                            </StyledTableCell>

                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={css.voterStatus}>
                <div className={css.voter}>
                    <p>
                        <strong>Voter Status: {' '}</strong>
                        {isVoter ? (
                            <span className={css.registered}>Registered</span>
                        ): (
                            <span className={css.notRegistered}>Not Registered</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CandidateList