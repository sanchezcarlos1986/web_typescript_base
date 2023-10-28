import React from 'react';
import {Styles} from './LoginForm.styles';

export const LoginForm: React.FC = () => {
  return (
    <Styles.Container className="LoginForm">
      <form>
        <div>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
      </form>
    </Styles.Container>
  );
};
