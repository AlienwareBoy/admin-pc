"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonApi = void 0;

var _request = require("@/utils/request.js");

var commonApi = {
  test: function test() {
    return _request.request.get('/api/common/test');
  },
  login: function login(body) {
    return _request.request.post('/api/user/login', body);
  },
  register: function register(body) {
    return _request.request.post('/api/user/register', body);
  }
};
exports.commonApi = commonApi;