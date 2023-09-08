import React from 'react';

import { useParams } from 'react-router-dom';
import { getReports } from '../../../../api';
import useFetchData from '../../../../hooks/useFetchData';
import Content from './content';

const Report = () => {
  const { id } = useParams();

  const { loading, isLoaded, data, containerRef } = useFetchData(getReports, {
    id,
  });

  return (
    <Content
      containerRef={containerRef}
      loading={loading}
      isLoaded={isLoaded}
      data={data}
    />
  );
};

export default Report;
