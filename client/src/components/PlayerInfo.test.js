import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';

import PlayerInfo from './PlayerInfo';

test('renders PlayerInfo component without crashing', () => {
  render(<PlayerInfo />)
});

test('Shows name', async () => {
  const { findByText } = render(<PlayerInfo />);
  const name = await findByText(/player:/i);
  expect(name).toBeInTheDocument();
});

test('Shows country', async () => {
  const { findByText } = render(<PlayerInfo />);
  const country = await findByText(/country:/i);
  expect(country).toBeInTheDocument();
});