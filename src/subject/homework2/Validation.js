import React from "react";

function Validation(props) {
  let longitudTexto = null;
  if (props.length > 5) {
    longitudTexto = (
     
        <p>demasiado largo</p>
    
    );
  } else {
    longitudTexto = (
      
        <p>demasiado corto</p>
      
    );
  }

  return (
    <>
      <p>{props.length}</p>
      <p>{longitudTexto}</p>
    </>
  );
}

export default Validation;
