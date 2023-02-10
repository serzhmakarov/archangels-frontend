import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { navLinks } from '../../../constants';
import { StyledMenu } from '../styles';

const Menu = () => {
  return (
    <StyledMenu>
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
          <Nav.Link smooth as={HashLink} to="/#contacts">Контакти</Nav.Link>
        </Nav>
      </Navbar>
    </StyledMenu>
  )
}
export default Menu;