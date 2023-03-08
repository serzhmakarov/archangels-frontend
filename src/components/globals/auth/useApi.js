import { useState } from 'react';
import { login } from '../../../api';

export default function useApi() {
  const [user, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await login(userData);
      setUsers(res.data);
      setLoading(false);

      return Promise.resolve(res);
    } catch (error) {
      setLoading(false);
      setError(error);
      return Promise.reject(error);
    }
  };

  return { user, loading, error, onLogin };
};