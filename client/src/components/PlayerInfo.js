import React from 'react';
import './styles.css';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PlayerInfo = ({name, country}) => {
  const [value] = useLocalStorage(name);

  return(
    <div className='player-info'>
      <h3 style={{color: 'red'}}>{name}</h3>
      <p>{`${name} plays for ${country}.`}</p>
    </div>
  );
}

export default PlayerInfo;