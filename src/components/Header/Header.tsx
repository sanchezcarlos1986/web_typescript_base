import React from 'react';
import Link from 'next/link';
import {Logo} from '../Logo';
import {Styles} from './Header.styles';

export const Header: React.FC = () => {
  return (
    <Styles.Container>
      <header>
        <Link href="/">
          <Logo fill="#e50914" width="167px" />
        </Link>
      </header>
    </Styles.Container>
  );
};
