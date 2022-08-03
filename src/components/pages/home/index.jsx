import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactForm from './contactForm';
import MainPageImage from '../../../assets/images/main_page.jpg';

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
            <Button variant="outline-danger" className="archangels-btn">ДОПОМОГТИ</Button>
            <Button variant="outline-danger" className="archangels-btn">ПРИЄДНАТИСЯ</Button>
          </div>
        </div>
        <div className="home-page__title-block-right-side">
          <img className="home-page__title-block-image" src={MainPageImage} alt="main_page_img" />
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
                 Ми збираємо гроші на круті броніки,
                 прибори ночного бачення та дрони – лише найкраще, лише найбільш потрібне.
              </p>
            </div>
            <div className="home-page__responsibility-card">
              <h4>ЕВАКУАЦІЯ</h4>
              <p>
                 Ми збираємо гроші на круті броніки,
                 прибори ночного бачення та дрони – лише найкраще, лише найбільш потрібне.
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
            <p>Щомісяця ми публікуємо <a href="#hyperlink" className="home-page__hyperlink">фінансові звіти</a>. Все прозоро, всі гроші йдуть на допомогу армії.</p>
            <p>Або приєднуйся до нашої команди. Для цього достатньо просто написати нам.</p>
          </div>
       </Col>
      </Row>
      <ContactForm />
    </Container>
  );
};

export default Home;