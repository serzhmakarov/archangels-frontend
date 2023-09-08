/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from 'react';

export default function useApi({ initialLimit = 15, callback }) {
  const [limit, setLimit] = useState(initialLimit);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState({
    data: [],
    meta: {},
  });

  const fetchItems = () => {
    setLoading(true);
    setError(null);

    callback({ query: `?per_page=${limit}` })
      .then((response) => {
        setResponse(response);
        setLimit(limit + initialLimit);
        setLoading(false);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setIsLoaded(true);
      });
  };

  const handleScroll = useCallback(
    (event) => {
      const { data, meta } = response;
      const elementRef = event.target.documentElement;
      const disabled = loading || meta.total_count === data.length;
      const shouldLoadData =
        elementRef.scrollTop + elementRef.clientHeight >
        elementRef.scrollHeight - 300;

      if (shouldLoadData && !disabled) {
        fetchItems();
      }
    },
    [loading, fetchItems, response.data.length, response.meta.total_count],
  );

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const isDataEmpty = isLoaded && !response.data.length;

  return {
    error,
    fetchItems,
    handleScroll,
    isDataEmpty,
    isLoaded,
    loading,
    response,
  };
}
