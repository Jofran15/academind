import React, { Component } from "react";

import "./App.css";

import Styling from "./subject/styling components/styling";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    

    return (
      <div className="app">
        <Styling/>
      
      </div>
    );
  }
}

export default App;
