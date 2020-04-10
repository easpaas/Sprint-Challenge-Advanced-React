import React from 'react';
import './styles.css';

const PlayerInfo = ({name, country}) => {
  return(
    <div className='info'>
      <h3 id="name">Player: {name}</h3>
      <p id="country">Country: {country}</p>
    </div>
  );
}

export default PlayerInfo;