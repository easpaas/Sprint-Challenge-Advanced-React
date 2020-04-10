import React from "react";
import axios from 'axios';
import "./App.css";

import PlayerInfo from './components/PlayerInfo';

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
        {
          this.state.data.map(player => {
            return (
              <PlayerInfo key={player.id} name={player.name} country={player.country} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
