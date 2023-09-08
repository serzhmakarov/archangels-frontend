import React, { useState } from 'react';
import Auth from '../components/globals/auth';

const withAuthorization = (Component) => (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem('authToken'),
  );

  if (isLoggedIn) return <Component {...props} />;

  return <Auth open setIsLoggedIn={setIsLoggedIn} />;
};

export default withAuthorization;
