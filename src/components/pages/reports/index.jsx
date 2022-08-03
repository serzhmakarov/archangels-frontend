import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { reportsList } from '../../../constants';

const Reports = () => {
  return (
    <Container fluuid className="reports-page">
      <Row className="about-page__title-block">
        <h1>ЗВІТИ</h1>
      </Row>
    
      <Row className="content-wrapper">
        <div className="reports-list">
          {reportsList.map(({ name, link }) => (
            <div className="reports-list-item" key={name}>
              <div className="report-name">{name}</div>
              <Button 
                variant="outline-danger" 
                className="archangels-btn"
                as="a"
                href={link}
              >
                Читати
              </Button>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Reports;