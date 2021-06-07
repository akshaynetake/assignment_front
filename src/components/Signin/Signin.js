import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

import TextField from '../TextField/TextField';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { userLogin } from '../../api/ApiService';

const Container = styled.div`
   text-align: center;
   width: 100%;
`;

const ButtonsContainer = styled.div`
   text-align: center;
   width: 100%;
`;

const Signin = (props) => {
    const alert = useAlert();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginCall = () => {
        let data = {
            email: email,
            password: password
        }
        userLogin(data).then(res => {
            console.log("the login responce is =>", res);
            if (res.code === 200) {
                alert.success('Sign up sucessfully!');
                setPassword('');
                setEmail('');
                localStorage.setItem("token", res.token);
                localStorage.setItem("userid", res.data._id);
            } else {
            }
        }).catch(err => {
            console.log("err ==>", err);
        })
    }

    const handleLogin = () => {
        props.setActive("Register");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <TextField value={email} onChange={handleEmail} placeholder={"Email"} />
            <TextField value={password} onChange={handlePassword} type={'password'} placeholder={"Password"} />
            <ButtonsContainer>
                <PrimaryButton onClick={loginCall}>Login</PrimaryButton>
                <SecondaryButton onClick={handleLogin}>Register</SecondaryButton>
            </ButtonsContainer>
        </Container>
    )
}

export default Signin