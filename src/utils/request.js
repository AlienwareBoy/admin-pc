import axios from 'axios';
import { Message } from 'element-ui';
import Vue from 'vue';
const baseUrl = 'http://127.0.0.1:5000';
const request = axios.create({
  baseUrl,
  timeout: 2000,
});

async function resolve(res) {
  const { data } = res;
  if (data.status === 304) {
    Message.error(data.msg);
  }
  return Promise.resolve(res)
};
async function reject(err) {
  return Promise.reject(err)
}

request.interceptors.response.use(resolve, reject);

export {
  request
}