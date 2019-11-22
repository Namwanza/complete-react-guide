import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="Person">
            <p>Username: {props.userName}</p>
            <p>some text to be over written !</p>
        </div>
    )
}

export default UserOutput;