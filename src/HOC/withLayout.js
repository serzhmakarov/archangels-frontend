import React from 'react';
import Layout from '../components/globals/layout';

const withLayout = (Component) => (props) => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;