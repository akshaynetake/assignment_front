import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    outline: none;
    border: 1px var(--primary) solid;
    width: 80%;
    font-size: 20px;
    color: grey;
    font-family: 'Montserrat';
    border-radius: 5px;
`;

const TextField = (props) => {
    return (
        <Input {...props} />
    )
}

export default TextField