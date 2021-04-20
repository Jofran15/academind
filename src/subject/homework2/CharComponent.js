import React from 'react'

function CharComponent(props) {
    const charStyle={
        display:'inlineBlock',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black',
        width:'10%'


    }

   
    return (
        <div onClick={props.clicked}style={charStyle}>
            {props.char}
        </div>
    )
}

export default CharComponent
