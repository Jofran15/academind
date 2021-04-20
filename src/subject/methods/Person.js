import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  border-style: solid;
  border-color: black;
  margin-top: 30px;

    @media (min-width: 500px) {
        width: "450px"
        }
`

const Person = (props) => {
  /*  const card = {
        borderStyle: 'solid',
        borderColor:'black',
        padding:'50px',
        
    }
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
         */

  return (
    <StyledDiv>
      <p onClick={props.click}>
        yo soy {props.name} y tengo {props.age} años{" "}
      </p>
    </StyledDiv>
  );
};

export default Person;
