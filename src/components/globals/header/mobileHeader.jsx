import React from 'react';

import useScrollDirection from '../../../hooks/useScrollDirection';
import { HeaderMobileContainer } from '../styles';
import Logo from '../logo';
import Menu from './menu';

const MobileHeader = () => {
  const scrollDirection = useScrollDirection();

  return (
    <HeaderMobileContainer scrollDirection={scrollDirection}>
      <Menu />
      <div className="header-mobile__wrapper">
        <Logo />
        <div className="hamburger">
          <div className="burger" />
          <div className="burger" />
          <div className="burger" />
        </div>
      </div>
    </HeaderMobileContainer>
  );
};

export default MobileHeader;