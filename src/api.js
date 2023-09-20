const API_URL = `${process.env.REACT_APP_BASE_API_URL}/api/v1`;
// const API_URL = 'http://localhost:3005/api/v1';

const endpoints = {
  reports: '/posts/',
  sendForm: '/contacts/',
  login: '/login/',
  partners: '/partners/',
  projects: '/projects/',
  payment: '/payments/create_checkout_url',
};

async function request({ method, endpoint, data }) {
  const authToken = sessionStorage.getItem('authToken');
  const isStringify = !(data instanceof FormData);

  const headers = {};

  if (isStringify) {
    headers['Content-Type'] = 'application/json';
  }

  if (sessionStorage.getItem('authToken')) {
    headers.Authorization = authToken;
  }

  const options = {
    method,
    mode: 'cors',
    headers,
    body: isStringify ? JSON.stringify(data) : data,
    redirect: 'follow',
  };

  return fetch(API_URL + endpoint, options)
    .then((response) => {
      const authToken = response.headers.get('Authorization');

      if (authToken) {
        sessionStorage.setItem('authToken', authToken);
      }

      if (!response.ok) {
        return Promise.reject(response);
      }

      return response.json();
    })
    .catch(async (error) => {
      if (error.status === 401) {
        sessionStorage.removeItem('authToken');
      }

      try {
        const { message } = await error.json();
        return Promise.reject(new Error(message));
      } catch {
        return Promise.reject(error);
      }
    });
}

request.defaultProps = {
  data: [],
  method: 'get',
  endpoint: '/',
};

// FONDY REQUEST

export const getFondyCheckoutURL = ({ amount, currency }) =>
  request({
    method: 'get',
    endpoint: endpoints.payment + `?amount=${amount}&currency=${currency}`,
  });

// AUTH
export const login = (data) =>
  request({ method: 'post', endpoint: endpoints.login, data });

// SEND FORM TO SEND EMAIL
export const sendForm = (data) =>
  request({ method: 'post', endpoint: endpoints.sendForm, data });

// GET, CREATE, UPDATE, DELETE requests for Reports
export const getReports = ({ id = '', query = '/' }) =>
  request({ method: 'get', endpoint: endpoints.reports + id + query });

export const createReport = (data) =>
  request({ method: 'post', endpoint: endpoints.reports, data });

export const updateReport = ({ id, data }) =>
  request({ method: 'put', endpoint: endpoints.reports + id, data });

export const deleteReport = (id) =>
  request({ method: 'delete', endpoint: endpoints.reports + id });

// GET, CREATE, UPDATE, DELETE requests for Partners
export const getPartners = ({ id = '', query = '/' }) =>
  request({ method: 'get', endpoint: endpoints.partners + id + query });

export const createPartner = (data) =>
  request({ method: 'post', endpoint: endpoints.partners, data });

export const updatePartner = ({ id, data }) =>
  request({ method: 'put', endpoint: endpoints.partners + id, data });

export const deletePartner = (id) =>
  request({ method: 'delete', endpoint: endpoints.partners + id });

// GET, CREATE, UPDATE, DELETE requests for Projects
export const getProjects = ({ id = '', query = '/' }) =>
  request({ method: 'get', endpoint: endpoints.projects + id + query });

export const createProject = (data) =>
  request({ method: 'post', endpoint: endpoints.projects, data });

export const updateProject = ({ id, data }) =>
  request({ method: 'put', endpoint: endpoints.projects + id, data });

export const deleteProject = (id) =>
  request({ method: 'delete', endpoint: endpoints.projects + id });
