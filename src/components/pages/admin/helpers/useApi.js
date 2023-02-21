import { actionTypes } from '../../../../constants/actionTypes';
import { 
  createPost, createReport, deletePost, deleteReport 
} from '../../../../api';

const generateFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(`post[${key}]`, data[key]);
  });

  return formData;
};


export default function useApi({ dispatch }) {
  const createPostRequest = async (data) => {
    const formData = generateFormData(data);

    dispatch({ type: actionTypes.createPostRequest });

    try {
      const response = await createPost(formData);
      dispatch({ type: actionTypes.createPostSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.createPostFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const createReportRequest = async (data) => {
    dispatch({ type: actionTypes.createReportRequest });

    const formData = generateFormData(data);

    try {
      const response = await createReport(formData);
      dispatch({ type: actionTypes.createReportSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.createReportFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const deletePostRequest = async (id) => {
    dispatch({ type: actionTypes.deletePostRequest });

    try {
      const response = await deletePost(id);
      dispatch({ type: actionTypes.deletePostSuccess, payload: id });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.deletePostFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const deleteReportRequest = async (id) => {
    dispatch({ type: actionTypes.deleteReportRequest });

    try {
      const response = await deleteReport(id);
      dispatch({ type: actionTypes.deleteReportSuccess, payload: id });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.deleteReportFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  return {
    createPostRequest,
    createReportRequest,
    deletePostRequest,
    deleteReportRequest,
  };
};

