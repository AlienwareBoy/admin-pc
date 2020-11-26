import axios from "axios";
import { Message } from "element-ui";
import Vue from "vue";
const baseUrl = "http://127.0.0.1:5000";
const request = axios.create({
  baseUrl,
  timeout: 2000
});

async function resolve(res) {
  const { data } = res;
  console.log(res, "sdfasfsafasdf");
  if (data.code === 404) {
    Message.error(data.msg);
  } else if (data.code === 200) {
    Message.success(data.msg);
  } else if (data.code === 10001) {
    Message.error(data.msg);
    setTimeout(() => {
      sessionStorage.removeItem('userInfo')
      sessionStorage.removeItem("token");
      window.location.href = "/";
    },500);
    
  }
  return Promise.resolve(res);
}
async function reject(err) {
  console.log(err);
  return Promise.reject(err);
}

request.interceptors.response.use(resolve, reject);
request.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export { request };
