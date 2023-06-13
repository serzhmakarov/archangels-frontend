import React from 'react';

import Logo from '../../logo';
import useScrollDirection from '../../../../hooks/useScrollDirection';
import { HeaderDesktopContainer } from '../../styles';
import NavigationMenu from './NavigationMenu';

const DesktopHeader = () => {
  const scrollDirection = useScrollDirection();
  
	return (
    <HeaderDesktopContainer 
      className="desktop-header-container" 
      scrollDirection={scrollDirection}
    >
      <Logo />
      <NavigationMenu />
    </HeaderDesktopContainer>
	);
};

export default DesktopHeader;