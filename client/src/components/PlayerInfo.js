import React from 'react';
import './styles.css';

const PlayerInfo = ({name, country}) => {
  return(
    <div className='container'>
      <p>{name}</p>
      <p>{`${name} plays for ${country}.`}</p>
    </div>
  );
}

export default PlayerInfo;