
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getReports } from '../../../../api';
import { actionTypes } from '../../../../constants/actionTypes';

export default function useFetchAdminData({ dispatch, currentPage }) {
  useEffect(() => {
		dispatch({ type: actionTypes.getReportsRequest });

    getReports({ query: `?page=${currentPage}` })
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