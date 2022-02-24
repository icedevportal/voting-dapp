import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: 50,
        padding : '8px 18px',
        flexDirection: 'row !important',
        justifyContent: 'space-between'
      },
    loginBtn: {
        backgroundColor: '#fff !important',
        textTransform: 'capitalize !important',
    }
  });

const Login = styled.div`
`


const Header = ({ account, login }) => {
  const css = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  className={css.root} >
            <Typography variant="h5" component="div">
              Voting DApp
            </Typography>
            <Login>
                {account &&  (
                    <p>{account}</p>
                )}
                
            </Login>
        </AppBar>
    </Box>
  )
}

export default Header