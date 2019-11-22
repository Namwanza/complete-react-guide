import React from 'react';

const UserInput = (props) => {
    // inline styles
    const style = {
        border: '1px solid grey',
        background: 'white',
        padding: '16px',
        margin: '20px',
        width: '20%'
    }
    return (
        <input type="text" 
            placeholder = 'Enter your username here'
            onChange = {props.changeUsername} 
            value = {props.username}
            style = {style}/>
    )
}

export default UserInput;