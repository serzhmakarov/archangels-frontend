
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getPosts, getReports } from '../../../../api';
import { actionTypes } from '../../../../constants/actionTypes';

export default function useFetchAdminData({ dispatch }) {
  useEffect(() => {
		dispatch({ type: actionTypes.getPostsRequest });
		dispatch({ type: actionTypes.getReportsRequest });

    Promise.all([getPosts(), getReports()])
			.then(([posts, reports]) => {
				dispatch({ type: actionTypes.getPostsSuccess, payload: posts });
				dispatch({ type: actionTypes.getReportsSuccess, payload: reports });

				return Promise.resolve([posts, reports]);
			})
			.catch((error) => {
				dispatch({ type: actionTypes.getPostsFailure, payload: error });
				dispatch({ type: actionTypes.getReportsFailure, payload: error });

				return Promise.reject(error);
			})
  }, []);

	return null;
}