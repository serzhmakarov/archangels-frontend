import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import SocialNetworks from './socialNetworks';

const Footer = () => {

  const onMoveTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="site-footer site-footer-three ">
      <div className="footer">
        <Container>
          <div className="footer-content">
            <div className="footer-contacts-content">
              <h4>БФ “АРХАНГЕЛЬЄРИ КИЄВА”</h4>
              <SocialNetworks />
              <p className="footer-contacts-hint">
                Тяжкий 2022 рік. 
                <a 
                  className="footer-terms-link" 
                  target="_blank" 
                  href="/terms"
                  rel="noopener noreferrer"
                >
                  Загальні положення та умови
                </a>
              </p>
             
            </div>
            <div className="footer-button-up">
              <Button 
                variant="outline-primary" 
                className="button-up"
                onClick={onMoveTop}
              >
               &#x2191; ВГОРУ
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;