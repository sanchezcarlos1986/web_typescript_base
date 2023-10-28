import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../src/pages/login';

describe('Login', () => {
  const {container} = render(<Login />);

  test('render page', () => {
    expect(container).toBeInTheDocument();
  });
});
