
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { getReports } from '../../../api';

export default function useApi() {
  const initialLimit = 15;
  
  const [limit, setLimit] = useState(initialLimit);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [reports, setReports] = useState({
    data: [],
    meta: {},
  });

  const fetchItems = () => {
    setLoading(true);
		setError(null);

		getReports({ query: `?per_page=${limit}` })
			.then((reports) => {
				setReports(reports)
        setLimit(limit + initialLimit);
				setLoading(false);
				setIsLoaded(true);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
				setIsLoaded(true);
			})
  };

	return { limit, fetchItems, reports, error, isLoaded, loading };
}