import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home';

describe('Home', () => {
  render(<Home />);

  test('render title', () => {
    expect(screen.getByText(/soy HomePage/i)).toBeInTheDocument();
  });
});
