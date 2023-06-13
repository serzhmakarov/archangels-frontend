import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';
import { navLinks } from '../../../../constants';

const NavigationMenu = () => {
  return (
    <Navbar>
      <Nav className="header-navigation-container">
        {navLinks.map(({ link, label, children }) => (
          <Nav className="header-navigation-item-wrapper">
            <Nav.Link
              key={link}
              to={link}
              as={NavLink}
            >
              {t(label)}
              <div className="red-underline" />
            </Nav.Link> 
            <div className="header-navigation-menu">
              {children && children.map(({ link, label, hashLink }) => (
                <Nav.Link
                  key={link}
                  to={link}
                  as={hashLink ? HashLink : NavLink}
                >
                  {t(label)}
                </Nav.Link> 
              ))}
            </div>
          </Nav>
        ))}
     </Nav>
   </Navbar>
    
  );
};

export default NavigationMenu;