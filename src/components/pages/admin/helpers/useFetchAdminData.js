
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { actionTypes } from '../../../../constants/actionTypes';

export default function useFetchAdminData({ dispatch, currentPage, callback }) {
  useEffect(() => {
		dispatch({ type: actionTypes.getReportsRequest });

    callback({ query: `?page=${currentPage}` })
			.then((reports) => {
				dispatch({ type: actionTypes.getReportsSuccess, payload: reports });

				return Promise.resolve(reports);
			})
			.catch((error) => {
				dispatch({ type: actionTypes.getReportsFailure, payload: error });

				return Promise.reject(error);
			})
  }, [currentPage]);

	return null;
}