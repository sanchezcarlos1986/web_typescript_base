import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {AuthContext, AuthProvider} from './AppContext';

describe('AuthContext', () => {
  test('hola', () => {
    expect(1).toBe(1);
  });

  test('get context values', async () => {
    const TestComponent = () => {
      const {login, logout, isLoggedIn} = React.useContext(AuthContext);
      return (
        <div>
          <p>isLoggedIn: {isLoggedIn.toString()}</p>
          <button onClick={login}>Login!</button>
          <button onClick={logout}>Logout...</button>
        </div>
      );
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    expect(screen.getByText(`isLoggedIn: false`)).toBeInTheDocument();

    userEvent.click(screen.getByText('Login!'));

    await waitFor(() =>
      expect(screen.getByText(`isLoggedIn: true`)).toBeInTheDocument(),
    );

    userEvent.click(screen.getByText('Logout...'));

    await waitFor(() =>
      expect(screen.getByText(`isLoggedIn: false`)).toBeInTheDocument(),
    );
  });
});
