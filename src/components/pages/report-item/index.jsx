import React from 'react';
import Container from 'react-bootstrap/Container';
import { useMatch } from 'react-router-dom';

import { getReports } from '../../../api';

import useFetchData from '../../../hooks/useFetchData';
import Content from './content';

const Report = () => {
  const match = useMatch();

  const { loading, isLoaded, data } = useFetchData(getReports, match.params.id);

  return (
    <Container fluuid className="report-page">
      <Content 
        data={data}
        loading={loading}
        isLoaded={isLoaded}
      />
    </Container>
  );
};

export default Report;