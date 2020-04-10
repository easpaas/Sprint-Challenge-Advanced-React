import React from 'react';
import './styles.css';

import PlayerInfo from './PlayerInfo'; 


const PlayerCard = (props) => {

  return (
    <div className="player-card">
      {
        props.data.map(player => {
          return (
            <PlayerInfo key={player.id} name={player.name} country={player.country} />
          );
        })
      }
    </div>
  )
}

export default PlayerCard;