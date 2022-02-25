import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.45);
    z-index: 999999;
    display: flex;
    align-Items: center;
    justify-content: center;
`

const Loader = ({ loading }) => {
  return (
    <>
        {loading && (
            <Wrapper>
                <CircularProgress size={60} />
            </Wrapper>
        )}
    </>
  )
}

export default Loader