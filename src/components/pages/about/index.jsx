import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { teamList, founders } from '../../../constants';
import TeamMemberCards from './team';
import PartnersList from './partners';

const About = () => {
  return (
    <Container className="about-page">
      <Row className="about-page__title-block">
        <Col xl={6}>
          <h1>ПРО НАС</h1>
          <p>Привіт! Давай трохи розповимо про нашу не велику, але результативну команду</p>
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
        </Col>
      </Row>
      <TeamMemberCards 
        list={founders}
        text="Засновники"
      />

      <TeamMemberCards 
        list={teamList}
        text="Команда"
      />

      <PartnersList />
    </Container>
  );
};

export default About;