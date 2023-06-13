import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReportsList from './reports';
import useApi from '../../../hooks/useApi';
import Placeholder from '../../globals/placeholder';
import { getReports } from '../../../api';

const Reports = () => {
  const {  
    loading, 
    isLoaded, 
    response,
    isDataEmpty
  } = useApi({ callback: getReports });

  return (
    <Container className="news-page">
      <Row className="about-page__title-block">
        <h1 className="title-block-text">Звіти</h1>
      </Row>
    
      <Row className="content-wrapper">
        <Placeholder 
          show={isDataEmpty}
          message="Незабаром тут з'являться всі новини нашого фонду від початку повномасштабного вторгнення."
        />
        <ReportsList 
          loading={loading}
          isLoaded={isLoaded}
          reports={response.data}
        />
      </Row>
    </Container>
  );
};

export default Reports;