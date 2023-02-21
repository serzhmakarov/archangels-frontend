import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { navLinks } from '../../../constants';
import { StyledMenu } from '../styles';

const Menu = ({ isMenuOpen, onCloseMenu }) => (
  <StyledMenu isMenuOpen={isMenuOpen}>
    <div>
      {navLinks.map(({ link, label }) => (
        <NavLink
          onClick={onCloseMenu}
          key={link}
          to={link}
        >
          {label}
        </NavLink>  
      ))}
      <NavLink 
        onClick={onCloseMenu}
        as={HashLink} 
        to="/#contacts"
      >
        Контакти
      </NavLink>
    </div>
  </StyledMenu>
);

export default Menu;