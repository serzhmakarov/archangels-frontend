import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { getReports } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';
import ReportsList from './reportsList';

const Reports = () => {
  const { data, isLoaded, loading } = useFetchData(getReports);
  return (
    <Container fluuid className="reports-page">
      <Row className="about-page__title-block">
        <h1>ЗВІТИ</h1>
      </Row>
    
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