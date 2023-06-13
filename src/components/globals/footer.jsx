import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import SocialNetworks from './socialNetworks';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const onMoveTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="site-footer site-footer-three ">
      <div className="footer">
        <Container>
          <div className="footer-content">
            <div className="footer-contacts-content">
              <h4>{t('home.charitable_name')}</h4>
              <SocialNetworks />
              <div className="policy-information">
                <NavLink to="/documents">
                  {t('home.header.documents')}
                </NavLink>
                <a 
                  target="_blank" 
                  href="/terms"
                  rel="noopener noreferrer"
                >
                  {t('home.footer.terms')}
                </a>
                <a 
                  target="_blank" 
                  href="/policy"
                  rel="noopener noreferrer"
                >
                  {t('home.footer.policy')}
                </a>
                <a 
                  target="_blank" 
                  href="/refund-policy"
                  rel="noopener noreferrer"
                >
                  {t('home.footer.refund')}
                </a>
              </div>
              
              <p className="footer-contacts-hint">
                &copy; 2023 {t('home.footer.copyright')}
              </p>
            </div>
            <div className="footer-button-up">
              <Button 
                variant="outline-primary" 
                className="button-up"
                onClick={onMoveTop}
              >
               &#x2191; {t('home.footer.up_button')}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;