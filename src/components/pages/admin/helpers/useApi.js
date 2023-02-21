import { actionTypes } from '../../../../constants/actionTypes';
import { 
  createPost, 
  createReport, 
  deletePost, 
  deleteReport,
  updatePost, 
  updateReport,
} from '../../../../api';

const generateFormData = (data, objectKey) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(`${objectKey}[${key}]`, data[key]);
  });

  return formData;
};


export default function useApi({ dispatch }) {
  const createPostRequest = async (data) => {
    const formData = generateFormData(data, 'post');

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
    const formData = generateFormData(data, 'report');

    dispatch({ type: actionTypes.createReportRequest });

    try {
      const response = await createReport(formData);
      dispatch({ type: actionTypes.createReportSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.createReportFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const updatePostRequest = async (formData, id) => {
    const data = generateFormData(formData, 'post');

    if (typeof data.photo === 'string') {
      data.delete('post[photo]');
    }

    dispatch({ type: actionTypes.updatePostRequest });

    try {
      const response = await updatePost({ id, data });
      dispatch({ type: actionTypes.updatePostSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.updatePostFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const updateReportRequest = async (formData, id) => {
    const data = generateFormData(formData, 'report');

    if (typeof data.photo === 'string') {
      data.delete('report[photo]');
    }

    dispatch({ type: actionTypes.updateReportRequest });

    try {
      const response = await updateReport({ id, data });
      dispatch({ type: actionTypes.updateReportSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.updateReportFailure, payload: error });
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
    updatePostRequest,
    updateReportRequest,
  };
};

