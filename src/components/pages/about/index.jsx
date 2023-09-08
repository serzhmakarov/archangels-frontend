import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Acknowledgments from './acknowledgments';
import { t } from 'i18next';

import { teamList } from '../../../constants';
import TeamMemberCards from './team';

const About = () => {
  return (
    <Container className="about-page">
      <Row className="about-page__title-block">
        <Col xl={6}>
          <h1>ПРО НАС</h1>
          <p>
            Привіт! Давай трохи розповимо про нашу не велику, але результативну
            команду
          </p>
          <Button
            variant="outline-danger"
            className="archangels-btn"
            as="a"
            href="https://bit.ly/36MNTm0"
            target="_blank"
            rel="noopener noreferrer"
          >
            ПРИЄДНАТИСЯ
          </Button>
        </Col>
      </Row>

      <TeamMemberCards list={teamList} text="Команда" />

      <Acknowledgments t={t} />
    </Container>
  );
};

export default About;
