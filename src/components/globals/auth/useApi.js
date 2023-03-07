import { useState } from 'react';
import { login } from '../../../api';

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (userData) => {
    setLoading(true);
    setError(null);

    login(userData)
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  return { loading, error, onLogin };
};