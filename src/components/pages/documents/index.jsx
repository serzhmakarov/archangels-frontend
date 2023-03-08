import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';

const Documents = () => {
  const { t } = useTranslation();
  return (
    <Container className="reports-page">
      <Row className="about-page__title-block">
        <h1>{t('home.header.documents')}</h1>
      </Row>
      <Row className="content-wrapper">
  
      </Row>
    </Container>
  );
};

export default Documents;