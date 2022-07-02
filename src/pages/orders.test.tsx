import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Orders from './orders';

describe('Orders', () => {
  render(<Orders />);

  test('render title', () => {
    expect(screen.getByText(/Orders Page/i)).toBeInTheDocument();
  });
});
