import React from 'react';

export const AuthContext = React.createContext<any | null>(null);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
