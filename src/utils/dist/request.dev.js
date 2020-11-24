"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseUrl = 'http://127.0.0.1:5000';

var request = _axios["default"].create({
  baseUrl: baseUrl,
  timeout: 2000
});

exports.request = request;

function resolve(res) {
  var data;
  return regeneratorRuntime.async(function resolve$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = res.data;

          if (data.code === 404) {
            _elementUi.Message.error(data.msg);
          } else if (data.code === 200) {
            console.log(data);

            _elementUi.Message.success(data.msg);
          }

          return _context.abrupt("return", Promise.resolve(res));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function reject(err) {
  return regeneratorRuntime.async(function reject$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", Promise.reject(err));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}

request.interceptors.response.use(resolve, reject);
request.interceptors.request.use(function (config) {
  var token = sessionStorage.getItem("token");

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});