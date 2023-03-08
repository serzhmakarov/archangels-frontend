
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getPosts } from '../../../../api';
import { actionTypes } from '../../../../constants/actionTypes';

export default function useFetchAdminData({ dispatch, currentPage }) {
  useEffect(() => {
		dispatch({ type: actionTypes.getPostsRequest });

    getPosts({ query: `?page=${currentPage}` })
			.then((posts) => {
				dispatch({ type: actionTypes.getPostsSuccess, payload: posts });

				return Promise.resolve(posts);
			})
			.catch((error) => {
				dispatch({ type: actionTypes.getPostsFailure, payload: error });

				return Promise.reject(error);
			})
  }, [currentPage]);

	return null;
}