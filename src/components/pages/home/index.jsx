import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ContactForm from './contactForm';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container className="home-page">
      <Row className="home-page__title-block content-wrapper">
        <div className="home-page__title-block-left-side">
          <h1>
            {t('home.head.archangels')} <br /> {t('home.head.kyiv')}
          </h1>
          <h4>
            {t('home.head.charity')} <br /> {t('home.head.charity_text')}
          </h4>
          <p>{t('home.head.work_text')}</p>
          <div className="home-page__title-block-left-side-action-buttons">
            <Button
              variant="outline-danger"
              className="archangels-btn"
              as={NavLink}
              to="/help"
            >
              {t('home.head.help_button')}
            </Button>
            <Button
              variant="outline-danger"
              className="archangels-btn"
              as="a"
              href="https://bit.ly/36MNTm0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('home.head.join_button')}
            </Button>
          </div>
          <div className="home-page__title-block-image-mobile" />
        </div>
        <div className="home-page__title-block-right-side">
          <div className="home-page__title-block-image" />
        </div>
      </Row>
      <Row className="home-page__responsibility-wrapper content-wrapper">
        <div className="home-page__responsibility">
          <h1 className="title-block-text">
            {t('home.specialization.title.our')} <br />
            {t('home.specialization.title.specialization')}
          </h1>

          <div className="home-page__responsibility-cards-wrapper">
            <div className="home-page__responsibility-card">
              <h4>{t('home.specialization.equipment.title')}</h4>
              <p>{t('home.specialization.equipment.text')}</p>
            </div>
            <div className="home-page__responsibility-card">
              <h4>{t('home.specialization.medicine.title')}</h4>
              <p>{t('home.specialization.medicine.text')}</p>
            </div>
            <div className="home-page__responsibility-card">
              <h4>{t('home.specialization.civilians.title')}</h4>
              <p>{t('home.specialization.civilians.text')}</p>
            </div>
          </div>
        </div>
      </Row>
      <Row className="home-page__help-content-container content-wrapper">
        <Col xs={4}>
          <h1 className="title-block-text">
            {t('home.help.title.first_part')} <br />
            {t('home.help.title.second_part')}
          </h1>
        </Col>
        <Col xs={8}>
          <div>
            <p>{t('home.help.donate_text')}</p>
            <p>
              {t('home.help.report_text_first')}
              <NavLink to="/reports" className="home-page__hyperlink">
                {t('home.reports')}.
              </NavLink>
              {t('home.help.report_text_second')}
            </p>
            <p>{t('home.help.join_text')}</p>
          </div>
        </Col>
      </Row>
      <ContactForm />
    </Container>
  );
};

export default Home;
