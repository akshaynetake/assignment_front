import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

import TextField from '../TextField/TextField';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { userRegister } from '../../api/ApiService';
import { validateEmail, isEmptyField } from '../../utils/validator';

const Container = styled.div`
   text-align: center;
   width: 100%;
`;

const ButtonsContainer = styled.div`
   text-align: center;
   width: 100%;
`;

const ShowPass = styled.div`
   text-align: Right;
   width: 91%;
`;

const ShowPassCon = styled.span`
    cursor: pointer;
    user-select:none;
`;

const Signup = (props) => {
    const alert = useAlert();
    const [showPass, SetShowPass] = useState(false);
    const [showPassText, setShowPassText] = useState('Show');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerCall = () => {
        if (!isEmptyField(name)) {
            alert.error('Please enter Name!');
        } else if (!isEmptyField(email)) {
            alert.error('Please enter Email!');
        } else if (!validateEmail(email)) {
            alert.error("Please Enter Valid Email!")
        } else if (!isEmptyField(password)) {
            alert.error("Please Enter Password!")
        } else {
            let data = {
                name: name,
                email: email,
                password: password
            }
            userRegister(data).then(res => {
                if (res.code === 200) {
                    alert.success('Sign up sucessfully!');
                    setName('');
                    setPassword('');
                    setEmail('');
                    handleSignin();
                } else {
                    console.log(res)
                    if (res.msg === "EMAIL_EXISTS") {
                        alert.error('User Already Exists!');
                    }else{
                        alert.error('Something Went Wrong!');
                    }
                }
            }).catch(err => {
                console.log("err ==>", err);
                alert.error('Something Went Wrong!');
            })
        }
    }

    const handlePasswordShow = () => {
        SetShowPass(!showPass);
        if (!showPass) {
            setShowPassText('Hide');
        } else {
            setShowPassText('Show');
        }
    }

    const handleSignin = () => {
        props.setActive('Login')
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <TextField value={name} onChange={handleName} placeholder={"Name"} />
            <TextField value={email} onChange={handleEmail} placeholder={"Email"} />
            <TextField value={password} onChange={handlePassword} type={showPass ? 'text' : 'password'} placeholder={"Password"} />
            <ShowPass>
                <ShowPassCon onClick={handlePasswordShow}>{showPassText} Pass</ShowPassCon>
            </ShowPass>
            <ButtonsContainer>
                <PrimaryButton onClick={registerCall}>Register</PrimaryButton>
                <SecondaryButton onClick={handleSignin}>Login</SecondaryButton>
            </ButtonsContainer>
        </Container>
    )
}

export default Signup