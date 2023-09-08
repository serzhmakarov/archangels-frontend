import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';

import useScrollDirection from '../../../../hooks/useScrollDirection';
import { HeaderMobileContainer } from '../../styles';
import Logo from '../../logo';
import Menu from './menu';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'initial';
  }, [isMenuOpen]);

  const scrollDirection = useScrollDirection();

  const handleMenuClick = () => setIsMenuOpen((prevState) => !prevState);

  const onCloseMenu = () => setIsMenuOpen(false);

  return (
    <HeaderMobileContainer
      className="header-mobile-container"
      scrollDirection={scrollDirection}
      isMenuOpen={isMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} />
      <div className="header-mobile__wrapper">
        <Logo />
        <Hamburger
          toggled={isMenuOpen}
          onToggle={handleMenuClick}
          color="#B30000"
          direction="right"
          duration={0.3}
        />
      </div>
    </HeaderMobileContainer>
  );
};

export default MobileHeader;
