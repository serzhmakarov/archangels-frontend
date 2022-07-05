import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../logo';
import { navLinks } from '../../../constants';

const MainHeader = () => {
	return (
    <div className="header">
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
        </Nav>
      </Navbar>
    </div>
	);
};

export default MainHeader;