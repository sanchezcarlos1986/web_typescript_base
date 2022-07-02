import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './products';

describe('Products', () => {
  render(<Products />);

  test('render title', () => {
    expect(screen.getByText(/Products Page/i)).toBeInTheDocument();
  });
});
