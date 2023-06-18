
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';

export default function useFetchData(callback, params = {}) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);

	const containerRef = useRef();

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

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.opacity = loading ? .6 : 1;
		}
	}, [loading]);

	return { 
		data, 
		error, 
		isLoaded, 
		loading,
		containerRef
	};
}