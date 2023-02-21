import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';

import Logo from '../logo';
import { navLinks } from '../../../constants';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { HeaderDesktopContainer } from '../styles';

const DesktopHeader = () => {
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
              as={Link}
            >
              {label}
            </Nav.Link>  
          ))}
          <Nav.Link as={HashLink} to="/#contacts">Контакти</Nav.Link>
        </Nav>
      </Navbar>
    </HeaderDesktopContainer>
	);
};

export default DesktopHeader;