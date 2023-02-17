import { useState } from 'react';
import { createPost } from '../../../../api';

export default function usePostRequest() {
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function callback(data) {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(`post[${key}]`, data[key]);
    });
    
    setLoading(true);
    setError(null);
    setIsSuccess(false);

    return createPost(formData)
      .then((response) => {
        setLoading(false);
        setIsSuccess(true);

        return Promise.resolve(response)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);

        return Promise.reject(error)
      })
  };

  return { error, isSuccess, loading, callback };
}