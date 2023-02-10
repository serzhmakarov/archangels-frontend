import React from 'react';

import useScrollDirection from '../../../hooks/useScrollDirection';
import { HeaderMobileContainer } from '../styles';
import Logo from '../logo';

const Menu = () => {
  const scrollDirection = useScrollDirection();

  return (
    <HeaderMobileContainer scrollDirection={scrollDirection}>
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

export default Menu;