import React from 'react';
import './styles.css';

const PlayerInfo = ({name, country}) => {
  return(
    <div className='player-info'>
      <h3 style={{color: 'white'}}>{name}</h3>
      <p>{`${name} plays for ${country}.`}</p>
    </div>
  );
}

export default PlayerInfo;