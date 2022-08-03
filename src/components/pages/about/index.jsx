import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Founders from './founders';
import { teamList } from '../../../constants';

const About = () => {
  return (
    <Container fluuid className="about-page">
      <Row className="about-page__title-block">
        <Col xl={6}>
          <h1>ПРО НАС</h1>
          <p>Привіт! Давай трохи розповимо про нашу не велику, але результативну команду</p>
          <Button 
            variant="outline-danger" 
            className="archangels-btn"
          >
            ПРИЄДНАТИСЯ
          </Button>
        </Col>
      </Row>
      <Founders />
    
      <Row className="content-wrapper">
        <h1 className="title-block-text">Команда</h1>
        <ul className="about-page__team-list">
          {teamList.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default About;