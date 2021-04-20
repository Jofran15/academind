import React, { Component } from "react";
import Person from "../methods/Person";

import styled from "styled-components";


const StyledButton=styled.button`

background-color:${props=>props.alt ? 'red':'green'};
          color:white;
          cursor: pointer;
            &:hover{
              background-color:${props=>props.alt ? 'salmon':'lightgreen'};
              color:black
            }

`

class Styling extends Component {
  state = {
    persons: [
      { id: "qw1", name: "max", age: 28 },
      { id: "qw2", name: "jofran", age: 29 },
      { id: "qw3", name: "stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };
  deletePerson = (index) => {
    const PERSONS =[...this.state.persons];
    PERSONS.splice(index, 1);
    this.setState({ persons: PERSONS });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  };

 
  render() {
     /*  const StyledButton={
          backgroundColor:'green',
          color:'white',
          cursor: 'pointer',
            ':hover':{
              backgroundColor:'lightgreen',
              color:'black'
            }
      } */

    let persons = null;
    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePerson(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    /*   StyledButton.background-Color='red'
      StyledButton[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
    */
    }
  

    const classes=[]
    if (this.state.persons.length<=2) {
      classes.push('red')
      
    }if (this.state.persons.length<=1) {
      classes.push('bold')
     
    }
    

    return (
    
      <div>
        <p className={classes.join(' ')}>Esto funciona</p>
        <StyledButton alt={this.state.showPersons} onClick={this.tooglePersonsHandler}>ShowPersons</StyledButton>
        {persons}
      </div>
   
    );
  }
}
export default Styling;
