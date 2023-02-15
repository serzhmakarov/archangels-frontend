const API_URL = `${process.env.REACT_APP_BASE_API_URL}/api/v1`

const endpoints = {
  posts: '/posts/',
  reports: '/reports/',
  sendForm: '/contacts/',
}

async function request({ method, endpoint, data }) {

  const headers = {
    'Content-Type': 'application/json',
  }

  const options = {
    method,
    headers,
    body: JSON.stringify(data),
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

export const getPosts = (id = '') => request({ method: 'get', endpoint: endpoints.posts + id }); 

export const getReports = (id = '') => request({ method: 'get', endpoint: endpoints.reports + id });

export const sendForm = (data) => request({ method: 'post', endpoint: endpoints.sendForm, data });