const API_URL = 'http://localhost:3000/api/v1';
// const API_URL = `${process.env.REACT_APP_BASE_API_URL}/api/v1`;


const endpoints = {
  posts: '/posts/',
  reports: '/reports/',
  sendForm: '/contacts/',
}

async function request({ method, endpoint, data }) {
  const isStringify = !(data instanceof FormData);

  const headers = {};

  if (isStringify) {
    headers['Content-Type'] = 'application/json';
  }

  const options = {
    method,
    mode: 'cors',
    headers,
    body: isStringify ? JSON.stringify(data) : data,
    redirect: 'follow',
  }

  try {
    const response = await fetch(API_URL + endpoint, options);
    return await response.json();
  } catch (error) {
    return await Promise.reject(error);
  }
}

request.defaultProps = {
  data: [],
  method: 'get',
  endpoint: '/'
}

// SEND FORM TO SEND EMAIL 
export const sendForm = (data) => request({ method: 'post', endpoint: endpoints.sendForm, data });

// GET, CREATE, UPDATE, DELETE requests for Reports and Posts
export const getPosts = (id = '') => request({ method: 'get', endpoint: endpoints.posts + id }); 

export const getReports = (id = '') => request({ method: 'get', endpoint: endpoints.reports + id });

export const createPost = (data) => request({ method: 'post', endpoint: endpoints.posts, data });

export const createReport = (data) => request({ method: 'post', endpoint: endpoints.reports, data });

export const updatePost = ({ id, data }) => request({ method: 'put', endpoint: endpoints.posts + id, data });

export const updateReport = ({ id, data }) => request({ method: 'put', endpoint: endpoints.reports + id, data });

export const deletePost = (id) => request({ method: 'delete', endpoint: endpoints.posts + id })

export const deleteReport = (id) => request({ method: 'delete', endpoint: endpoints.reports + id })