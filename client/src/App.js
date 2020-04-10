import React from "react";
import axios from 'axios';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
