
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getPosts, getReports } from '../../../../api';

export default function useFetchAdminData() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({ 
    posts: [],
    reports: [],
   })
	

  useEffect(() => {
		setLoading(true);
		setError(null);

    Promise.all([getPosts(), getReports()])
			.then(([posts, reports]) => {
				setData({ posts, reports })
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