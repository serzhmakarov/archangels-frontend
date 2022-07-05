import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { 
  InstagramIcon,
  FacebookIcon, 
  TelegramIcon 
} from '../../assets/icons';

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer site-footer-three ">
      <div className="footer">
        <Container>
          <div className="footer-content">
            <div className="footer-contacts-content">
              <h4>БФ “АРХАНГЕЛЬЄРИ КИЄВА”</h4>
              <div className="footer-social-networks">
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
              </div>
              <p className="footer-contacts-hint">Тяжкий 2022 рік.</p>
            </div>
            <div className="footer-button-up">
              <Button variant="outline-primary" className="button-up">ВГОРУ</Button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;