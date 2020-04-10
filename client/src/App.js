import React from "react";
import axios from 'axios';
import "./App.css";

import PlayerCard from "./components/PlayerCard";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error))
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <PlayerCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
