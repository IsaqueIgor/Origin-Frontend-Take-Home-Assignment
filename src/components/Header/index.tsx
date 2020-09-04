import React from 'react';

import Logo from '../../styles/icons/logo.svg';
import { HeaderContainer, HeaderContent } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Origin" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
