import React from 'react';
import {Home as Component} from './home.styles';
import Head from 'next/head';
import {AuthProvider} from '../Contexts/';

const HomePage: React.FC = () => {
  return (
    <Component.Container>
      <AuthProvider>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>Soy HomePage</h1>
      </AuthProvider>
    </Component.Container>
  );
};

export default HomePage;
