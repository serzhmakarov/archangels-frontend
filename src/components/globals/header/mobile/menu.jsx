import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { navLinks } from '../../../../constants';
import { StyledMenu } from '../../styles';

const Menu = ({ isMenuOpen, onCloseMenu }) => {
  const { t } = useTranslation();

  return (
    <StyledMenu 
      className="toggle-menu"
      isMenuOpen={isMenuOpen}
    >
      <div>
        {navLinks.map(({ link, label }) => (
          <NavLink
            onClick={onCloseMenu}
            key={link}
            to={link}
            className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {t(label)}
          </NavLink>  
        ))}
        <NavLink 
          onClick={onCloseMenu}
          as={HashLink} 
          to="/#contacts"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
         }
        >
          {t('home.header.contacts')}
        </NavLink>
      </div>
    </StyledMenu>
  );
};

export default Menu;