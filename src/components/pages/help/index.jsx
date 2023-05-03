import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaymentButton from '../../globals/payment/PaymentButton';

import { currencyAccounts } from '../../../constants';

const HelpPage = () => {
  return (
    <Container className="help-page">
      <Row className="about-page__title-block">
        <Col xl={6}>
          <h1>ДОПОМОГТИ</h1>
          <p>Ти, як і ми, більше не можеш залишатися осторонь і хочеш допомагати у цій війні? Супер! Найшвидший спосіб допомогти нам, це задонатити за реквізитами нижче</p>
        </Col>
        <PaymentButton />
      </Row>
    
      <Row className="content-wrapper">
        <h1 className="title-block-text">Реквізити</h1>
        <div className="currency-accounts-list">
          {currencyAccounts.map(({ name, account }) => (
            <div className="currency-accounts-list-item" key={name}>
              <div>{name}</div>
              <div>{account}</div>
            </div>
          ))}
        </div>
      </Row>
      <Row className="content-wrapper">
        <h1 className="title-block-text">
          ХОЧЕШ <br />
          ДОПОМАГАТИ <br />
          БІЛЬШЕ? 
        </h1>
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
      </Row>
    </Container>
  );
};

export default HelpPage;