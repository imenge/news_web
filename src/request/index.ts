import axios from 'axios';
import { Notify } from 'react-vant';

const api = axios.create({
  baseURL: 'https://news.hk.cpolar.io',
  timeout: 10000,
});

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 在请求发送之前可以处理请求，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  response => {
    Notify.show(response.data.msg);
    // 处理响应数据
    return response.data;
  },
  error => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default api;