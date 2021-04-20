import React, { Component } from "react";
import Person from "./Person";

class Methods extends Component {
  state = {
    persons: [
      {id:"qw1", name: "max", age: 28 },
      {id:"qw2", name: "jofran", age: 29 },
      {id:"qw3" ,name: "stephanie", age: 26 },
    ],
    otherState: "some other value",
    showName:true,
  };
deletePerson=(index)=>{
const PERSONS=this.state.persons
PERSONS.splice(index,1)
this.setState({person:PERSONS})
}


  
  render () {
  
     let persons=null;
     persons=(
       <div>
         {this.state.persons.map((person,index)=>{
           return <Person
           click={()=>this.deletePerson(index)}
          name={person.name}
           age={person.age}
           key={person.id}
           />
         })}
       </div>
     )
    
    return <div>
{persons}
      
    
    </div>;
  }
}
export default Methods;
