
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useFetchData(callback, params = {}) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([])

  useEffect(() => {
		setLoading(true);
		setError(null);

		callback(params)
			.then((reports) => {
				setData(reports)
				setLoading(false);
				setIsLoaded(true);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
				setIsLoaded(true);
			})
  }, [params.id]);

	return { data, error, isLoaded, loading };
}