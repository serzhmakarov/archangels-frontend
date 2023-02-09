import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

import ContactForm from './contactForm';

const Home = () => {
  return (
    <Container fluuid className="home-page">
      <Row className="home-page__title-block content-wrapper">
        <div className="home-page__title-block-left-side">
          <h1>АРХАНГЕЛЬЄРИ <br/> КИЄВА</h1>
          <h4>БЛАГОДІЙНИЙ ФОНД. <br/> МИ ТАМ, ДЕ МИ ПОТРІБНІ</h4>
          <p>
            Відвозимо нашим хлопцям та дівчатам корисне спорядження, 
            яке допомагає ефективніше нищити ворога та рятувати життя наших воїнів.
          </p>
          <div className="home-page__title-block-left-side-action-buttons">
            <Button 
              variant="outline-danger" 
              className="archangels-btn"
              as={NavLink}
              to="/help"
            >
              ДОПОМОГТИ
            </Button>
            <Button 
              variant="outline-danger" 
              className="archangels-btn"
              as="a"
              href='https://bit.ly/36MNTm0'
              target="_blank"
              rel="noopener noreferrer"
            >
              ПРИЄДНАТИСЯ
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
            НАША <br /> 
            СПЕЦІАЛІЗАЦІЯ
          </h1>

          <div className="home-page__responsibility-cards-wrapper">
            <div className="home-page__responsibility-card">
              <h4>СПОРЯДЖЕННЯ</h4>
              <p>
                 Ми збираємо гроші на круті броніки,
                 прибори ночного бачення та дрони – лише найкраще, лише найбільш потрібне.
              </p>
            </div>
            <div className="home-page__responsibility-card">
              <h4>МЕДИЦИНА</h4>
              <p>
                 Возимо українським військовим аптечки IFAK на нуль, постійно постачаємо сертифіковані турнікети.
              </p>
            </div>
            <div className="home-page__responsibility-card">
              <h4>ЕВАКУАЦІЯ</h4>
              <p>
                Вивозимо цивільних осіб з зони бойових дій. Довозимо до місць збору біженців у великих містах.
              </p>
            </div>
          </div>
        </div>
      </Row>
      <Row className="home-page__help-content-container content-wrapper">
        <Col xs={4}>
          <h1 className="title-block-text">
            ЯК ТИ МОЖЕШ <br /> 
            ДОПОМОГТИ 
          </h1>
        </Col>
       <Col xs={8}>
        <div>
            <p>Задонать нам! Це найпростіший та найефективніший спосіб допомогти діяльності фонду. </p>
            <p>Щомісяця ми публікуємо <NavLink to="/reports" className="home-page__hyperlink">фінансові звіти</NavLink>. Все прозоро, всі гроші йдуть на допомогу армії.</p>
            <p>Або приєднуйся до нашої команди. Для цього достатньо просто написати нам.</p>
          </div>
       </Col>
      </Row>
      <ContactForm />
    </Container>
  );
};

export default Home;