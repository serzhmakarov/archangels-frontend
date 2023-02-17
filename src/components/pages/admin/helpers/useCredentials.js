import { useState, useEffect, useCallback } from 'react';

const credentials = {
  password: process.env.REACT_APP_ADMIN_PASSWORD,
};

const withCredentials = Component => (props) => {
  const sessionStorageCredentials = sessionStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(sessionStorageCredentials));

  const checkPassword = useCallback(() => {
    const password = window.prompt('Enter a password');
    if (password === credentials.password) {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', true);
    } else {
      checkPassword();
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      checkPassword();
    }
  }, [isLoggedIn, checkPassword]);

  if (isLoggedIn) return <Component {...props} />

  return null
};

export default withCredentials;