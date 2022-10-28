import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReportsList from './reportsList';
import Placeholder from '../../globals/placeholder';
import { getReports } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';

const Reports = () => {
  const { data, isLoaded, loading } = useFetchData(getReports);
  const isDataEmpty = isLoaded && !data.length;

  return (
    <Container fluuid className="reports-page">
      <Row className="about-page__title-block">
        <h1>ЗВІТИ</h1>
      </Row>
      <Placeholder 
        show={isDataEmpty}
        message="Незабаром тут з'являться всі звіти нашого фонду від початку повномасштабного вторгнення."
      />
      <Row className="content-wrapper">
        <ReportsList 
          isLoaded={isLoaded}
          loading={loading} 
          reports={data} 
        />
      </Row>
    </Container>
  );
};

export default Reports;