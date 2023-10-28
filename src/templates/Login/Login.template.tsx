import React from 'react';
import Image from 'next/image';
import {Styles} from './Login.template.styles';
import {LoginForm} from '../LoginForm';

export const LoginTemplate: React.FC = () => {
  return (
    <Styles.Container className="LoginTemplate">
      <Styles.BackgroundWrapper>
        <Image
          src="/login-background.jpeg"
          layout="fill"
          alt="Picture of the author"
        />
      </Styles.BackgroundWrapper>
      <LoginForm />
    </Styles.Container>
  );
};
