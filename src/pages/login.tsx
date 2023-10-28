import React from 'react';
import {Layout} from '../components/Layout';
import {LoginTemplate} from '../templates/Login';

const Login: React.FC = () => {
  return (
    <Layout title="Login">
      <LoginTemplate />
    </Layout>
  );
};

export default Login;
