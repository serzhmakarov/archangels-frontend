import React from 'react';
import { useParams } from 'react-router-dom';

import { getReports } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';
import Content from './content';

const Report = () => {
  const { id } = useParams();

  const { loading, isLoaded, data } = useFetchData(getReports, { id });

  return (
    <div className="post-item-page">
      <Content 
        loading={loading} 
        isLoaded={isLoaded} 
        data={data} 
      />
    </div>
  );
};

export default Report;