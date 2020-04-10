import React from 'react';

const PlayerInfo = ({name, country}) => {
  return(
    <div className='player-info'>
      <p>{name}</p>
      <p>{`${name} plays for ${country}.`}</p>
    </div>
  );
}

export default PlayerInfo;