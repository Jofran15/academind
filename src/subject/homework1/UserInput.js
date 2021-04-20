import React from 'react'
import "./styles/UserInput.css"

function userInput(props) {
   
    return (
        <div className='input'>
            <div className='w3-input w3-border-0'>
           
            <input
            onChange={props.handler}
            value={props.currentValue}
            placeholder='Username'
             
            />  
            </div>
           
        </div>
    )
}

export default userInput
