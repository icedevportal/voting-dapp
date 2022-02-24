import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

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
    gap: 50px;
`

const VotingForm = ({ addCandidate, addVoter }) => {
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
                <Button variant='contained' type='submit'>Add Candidate</Button>
            </form>
        </FormContainer>
    </Container>
  )
}

export default VotingForm