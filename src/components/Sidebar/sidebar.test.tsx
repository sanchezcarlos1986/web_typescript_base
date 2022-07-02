import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './sidebar.display';

describe('Sidebar', () => {
  render(<Sidebar />);

  test('render title', () => {
    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  });
});
