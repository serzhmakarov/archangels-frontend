import { actionTypes } from '../../../../constants/actionTypes';
import {
  createReport,
  createPartner,
  createProject,
  updateReport,
  updatePartner,
  updateProject,
  deleteReport,
  deletePartner,
  deleteProject,
} from '../../../../api';

const generateFormData = (data, objectKey) => {
  const formData = new FormData();

  const appendData = (key, value, parentKey = null) => {
    const formattedKey = parentKey ? `${parentKey}[${key}]` : key;

    if (value instanceof File) {
      formData.append(formattedKey, value);
    } else if (typeof value !== 'object') {
      formData.append(formattedKey, value);
    } else {
      for (const subKey in value) {
        appendData(subKey, value[subKey], formattedKey);
      }
    }
  };

  for (const key in data) {
    appendData(key, data[key], objectKey);
  }

  return formData;
};

export default function useApi({ dispatch }) {
  // CREATE, PUT, DELETE * Reports
  const createReportRequest = async (data) => {
    const formData = generateFormData(data, 'post');

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

  const updateReportRequest = async (formData, id) => {
    const data = generateFormData(formData, 'post');

    console.log('formData', formData);
    console.log('data', data);
    // if (!formData.photo) {
    // data.delete('post[photo]');
    // }

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

  // CREATE, PUT, DELETE * Partners

  const createPartnerRequest = async (data) => {
    const formData = generateFormData(data, 'partner');

    dispatch({ type: actionTypes.createPartnerRequest });

    try {
      const response = await createPartner(formData);
      dispatch({ type: actionTypes.createPartnerSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.createPartnerFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const updatePartnerRequest = async (formData, id) => {
    const data = generateFormData(formData, 'partner');

    if (typeof data.photo === 'string') {
      data.delete('partner[photo]');
    }

    dispatch({ type: actionTypes.updatePartnerRequest });

    try {
      const response = await updatePartner({ id, data });
      dispatch({ type: actionTypes.updatePartnerSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.updatePartnerFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const deletePartnerRequest = async (id) => {
    dispatch({ type: actionTypes.deletePartnerRequest });

    try {
      const response = await deletePartner(id);
      dispatch({ type: actionTypes.deletePartnerSuccess, payload: id });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.deletePartnerFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  // CREATE, PUT, DELETE * Projects

  const createProjectRequest = async (data) => {
    const formData = generateFormData(data, 'project');

    dispatch({ type: actionTypes.createProjectRequest });

    try {
      const response = await createProject(formData);
      dispatch({ type: actionTypes.createProjectSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.createProjectFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const updateProjectRequest = async (formData, id) => {
    const data = generateFormData(formData, 'project');

    if (typeof data.photo === 'string') {
      data.delete('project[photo]');
    }

    dispatch({ type: actionTypes.updateProjectRequest });

    try {
      const response = await updateProject({ id, data });
      dispatch({ type: actionTypes.updateProjectSuccess, payload: response });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.updateProjectFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  const deleteProjectRequest = async (id) => {
    dispatch({ type: actionTypes.deleteProjectRequest });

    try {
      const response = await deleteProject(id);
      dispatch({ type: actionTypes.deleteProjectSuccess, payload: id });
      return await Promise.resolve(response);
    } catch (error) {
      dispatch({ type: actionTypes.deleteProjectFailure, payload: error });
      return await Promise.reject(error);
    }
  };

  return {
    createReportRequest,
    deleteReportRequest,
    updateReportRequest,
    createPartnerRequest,
    deletePartnerRequest,
    updatePartnerRequest,
    createProjectRequest,
    deleteProjectRequest,
    updateProjectRequest,
  };
}
