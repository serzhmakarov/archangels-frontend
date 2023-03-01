import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { navLinks } from '../../../constants';
import { StyledMenu } from '../styles';

const Menu = ({ isMenuOpen, onCloseMenu }) => {
  const { t } = useTranslation();

  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <div>
        {navLinks.map(({ link, label }) => (
          <NavLink
            onClick={onCloseMenu}
            key={link}
            to={link}
          >
            {t(label)}
          </NavLink>  
        ))}
        <NavLink 
          onClick={onCloseMenu}
          as={HashLink} 
          to="/#contacts"
        >
          {t('home.header.contacts')}
        </NavLink>
      </div>
    </StyledMenu>
  );
};

export default Menu;