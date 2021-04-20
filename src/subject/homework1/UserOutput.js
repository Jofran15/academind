import React from "react";
import "./styles/UserOutput.css"

const cardBody = {
  fontSize: "20px",
 
};
function UserOutput(props) {
  return (
    <div className="container">
      <div className="card">
        <div style={cardBody}>
          <p>{`Hi my name is ${props.username}`}</p>
          <p>I am learning react in academind</p>
        </div>
      </div>
    </div>
  );
}

export default UserOutput;
