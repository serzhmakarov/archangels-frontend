import React from 'react';
import Auth from '../components/globals/auth';

const withAuthorization = (Component) => (props) => {
  const token = sessionStorage.getItem('authToken');

  if (token) return <Component {...props} />;

  return <Auth open />
};

export default withAuthorization;