// import axios from 'axios'
//import qs from 'qs'
import { message } from 'antd';

export const request = (url, config) => {
  return fetch(url, {
      ...config, 
      credentials: 'include',})
    .then((res) => {
      if (res) {
        return res.json();
      } else {
        // 服务器异常
        // throw Error('');
        message.error(res.resultMsg);
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      message.error('errorMessage');
    });
};

export const get = (url) => {
  return request(process.env.REACT_APP_BASE_URL+url, { method: 'GET' });
};

export const post = (url, config) => {
  return request(process.env.REACT_APP_BASE_URL+url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(config),
  });
};
