import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Box, Paper } from '@mui/material';

const FormContainer = styled.div`

 & > h3 {
     margin-bottom: 10px;
 }

 & > form {
     display: flex;
     align-items: center;
     gap: 30px;
 }
`;

const Container = styled.div`
    width: 85%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`
const ButtonBox = styled.div`
    margin-top: 33px
`

const VotingForm = ({ addCandidate, addVoter, getWinner }) => {
    const [cName, setCName] = useState('');
    const [vAddress, setVAddress] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addCandidate(cName);
    }
    const handleVoter = (e) => {
        e.preventDefault();
        addVoter(vAddress);
    }
  return (
    <Box component={Paper} sx={{ padding: '40px 0', margin: '20px auto', width: '90%' }}>
    <h3 style={{ textAlign: 'center' }}>Admin Section</h3>
    <Container>
        <FormContainer>
            <h3>Add Candidate</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="cName" 
                    label="Candidate Name" 
                    variant="outlined" 
                    onChange={(e) => setCName(e.target.value)}
                    value={cName}
                />
                <Button variant='contained' type='submit'>Add Candidate</Button>
            </form>
        </FormContainer>
        <FormContainer>
            <h3>Add Voter</h3>
            <form onSubmit={handleVoter}>
                <TextField 
                    id="vAddress" 
                    label="Voter Address" 
                    variant="outlined" 
                    onChange={(e) => setVAddress(e.target.value)}
                    value={vAddress}
                />
                <Button variant='contained' type='submit'>Add Voter</Button>
            </form>
        </FormContainer>
        
        <ButtonBox>
            <Button variant='contained' onClick={() => getWinner()}>End Vote</Button>
        </ButtonBox>
    </Container>
    </Box>
  )
}

export default VotingForm