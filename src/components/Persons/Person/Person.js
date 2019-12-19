import React from 'react';
// import './Person.css'

import styled from 'styled-components';

const Styled = styled.div`
    width: 60%;
    margin: 26px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    '@media (min-width: 500px)': {
        width: '450px',
    }
`;

const person = (props) => {
    return (
        <Styled>
            <p onClick={props.click}>Am {props.name} and I'm {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </Styled>
    );
}

export default person;