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
  if (data.code === 404) {
    Message.error(data.msg);
  } else if (data.code === 200) {
    Message.success(data.msg);
  }
  return Promise.resolve(res)
};
async function reject(err) {
  return Promise.reject(err)
}

request.interceptors.response.use(resolve, reject);
request.interceptors.request.use(config => {
  const token=sessionStorage.getItem("token");
  if(token){
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config
}, error => {
  return Promise.reject(error)
})
export {
  request
}