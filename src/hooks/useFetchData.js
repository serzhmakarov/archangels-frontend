
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useFetchData(callback, params) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([])

  useEffect(() => {
		setLoading(true);
		setError(null);

		callback(params)
			.then((response) => {
				setData(response)
				setLoading(false);
				setIsLoaded(true);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
				setIsLoaded(true);
			})
  }, []);

	return { data, error, isLoaded, loading };
}