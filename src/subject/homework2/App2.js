import React, { Component } from "react";
import CharComponent from "./subject/homework2/CharComponent";
import Validation from "./subject/homework2/Validation";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    const textHandler = (e) => {
      this.setState({ text: e.target.value });
    };
    const deleteHandler=(index)=>{
      const text = this.state.text.split("");
      text.splice(index,1)
      const updateText=text.join("");
      this.setState({text:updateText})
    console.log(index);
    }

    const charList = this.state.text.split("").map((char,index) => {
      return <CharComponent char={char} key={index} clicked={()=>deleteHandler(index)}/>;
    });

    return (
      <div className="app">
        <input type="text" onChange={textHandler} value={this.state.text} />

       
          <Validation
           length={this.state.text.length} />
        
        <>{charList}</>
      </div>
    );
  }
}

export default App;
