import React from 'react';
import { useParams } from 'react-router-dom';

import { getPartners } from '../../../../api';
import useFetchData from '../../../../hooks/useFetchData';
import Content from './content';

const Partner = () => {
  const { id } = useParams();

  const { loading, isLoaded, data } = useFetchData(getPartners, { id });

  return (
    <div className="partner-item-page">
      <Content loading={loading} isLoaded={isLoaded} data={data} />
    </div>
  );
};

export default Partner;
