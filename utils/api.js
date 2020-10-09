import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://jsonplaceholder.typicode.com`,
  headers: {
    'content-Type': 'application/json',
    'X-Auth-Token': 'random'
  }
});

export const dataAPI = {
  postFormData(data) {
    return instance.post(`/posts`, data).then((response) => response);
  }
};
