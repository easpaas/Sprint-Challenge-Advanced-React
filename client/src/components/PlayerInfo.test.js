import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PlayerInfo from './PlayerInfo';

test('renders PlayerInfo component without crashing', () => {
  render(<PlayerInfo />)
});

