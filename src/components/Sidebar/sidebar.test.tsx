import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './sidebar.display';

describe('Sidebar', () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  test('render title', () => {
    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  });

  test('render links', () => {
    expect(screen.getByText(/clients/i)).toBeInTheDocument();
    expect(screen.getByText(/orders/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
