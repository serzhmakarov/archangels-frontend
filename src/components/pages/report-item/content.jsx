import React from 'react';
import withLoading from '../../../hooks/useLoading';

const Content = ({ data }) => {
  console.log(data);
  return (
    <div>
      
    </div>
  );
};

const ContentWithLoading = withLoading(Content);

export default ContentWithLoading;