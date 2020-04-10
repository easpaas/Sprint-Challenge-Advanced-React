import React from 'react';
import './styles.css';

import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="header"> 
      <h1>Womens World Cup Data</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </div>
  );
}

export default Header;