import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';

import Logo from '../logo';
import { navLinks } from '../../../constants';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { HeaderDesktopContainer } from '../styles';
import { useTranslation } from 'react-i18next';

const DesktopHeader = () => {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  
	return (
    <HeaderDesktopContainer className="header" scrollDirection={scrollDirection}>
     <Logo />
     <Navbar>
       <Nav>
          {navLinks.map(({ link, label }) => (
            <Nav.Link
              key={link}
              to={link}
              as={NavLink}
            >
              {t(label)}
            </Nav.Link>  
          ))}
          <Nav.Link as={HashLink} to="/#contacts">{t('home.header.contacts')}</Nav.Link>
        </Nav>
      </Navbar>
    </HeaderDesktopContainer>
	);
};

export default DesktopHeader;