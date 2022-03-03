import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Button, Tooltip} from '@mui/material';
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
    & > span {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

`
const ElectionNo = styled.div`

`


const Header = ({ account, voteStatus }) => {
  const css = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  className={css.root} >
            <Typography variant="h5" component="div">
              Voting DApp
            </Typography>
            <ElectionNo>
                <h3>Election Staus: {voteStatus ? 'Ended' : 'On Going'} </h3>
            </ElectionNo>
            <Login>
                {account &&  (
                    <Tooltip title='Click to copy address'>
                        <span onClick={() => navigator.clipboard.writeText(account)}>{account}</span>
                    </Tooltip>
                )}
                
            </Login>
        </AppBar>
    </Box>
  )
}

export default Header