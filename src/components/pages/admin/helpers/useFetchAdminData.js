
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export default function useFetchAdminData({ 
	currentPage, 
	callback,
	dispatch,
	getActionRequest,
	getActionSuccess,
	getActionFailure 
}) {
  useEffect(() => {
		dispatch({ type: getActionRequest });

    callback({ query: `?page=${currentPage}` })
			.then((payload) => {
				dispatch({ type: getActionSuccess, payload });

				return Promise.resolve(payload);
			})
			.catch((error) => {
				dispatch({ type: getActionFailure, payload: error });

				return Promise.reject(error);
			})
  }, [currentPage]);

	return null;
}