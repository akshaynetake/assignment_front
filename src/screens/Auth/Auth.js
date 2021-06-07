import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';

const Container = styled.div`
    width: 600px;
    margin: auto;
    border-radius: 20px;
    padding: 15px 0px 65px 0px;
    border: 5px var(--primary) solid;
    margin-top: 70px;
`;

const Heading = styled.h1`
   text-align: center;
   color: var(--primary)
`;

const Auth = (props) => {
    const[heading, setHeading] = useState('Login');

    return (
        <Container>
            <Heading>{heading}</Heading>
            {
                heading === 'Login' ? <Signin setActive={setHeading}/> : <Signup setActive={setHeading}/>
            }
        </Container>
    )
}

export default Auth