import React from 'react';

const validationCompont = (props) => {
    return (
        <div>
            {
                props.textLength <= 5 ?
                <p>Text too short</p>
                :
                <p>Text long enough</p>
            }
           
        </div>
    )
}

export default validationCompont;