import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getReports } from '../../../../api';
import useFetchData from '../../../../hooks/useFetchData';
import Content from './content';

const Report = () => {
  const { id } = useParams();
  
  useEffect(() => {
    console.log('id', id);
  }, [id]);

  const { loading, isLoaded, data } = useFetchData(getReports, { id });

  return (
    <Content 
      loading={loading} 
      isLoaded={isLoaded} 
      data={data} 
    />
  );
};

export default Report;