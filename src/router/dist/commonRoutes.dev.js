"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(require("@/components/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/",
  name: "login",
  component: function component(resolve) {
    return require(["@/pages/login/login.vue"], resolve);
  },
  meta: {
    name: "login",
    title: "登录",
    keepAlive: true
  }
}, {
  path: "/404",
  name: "error",
  component: function component(resolve) {
    return require(["@/pages/404.vue"], resolve);
  },
  meta: {
    name: "404",
    title: "数据异常",
    keepAlive: false
  }
}, {
  path: "/dashboard",
  name: "dashboard",
  component: _layout["default"],
  meta: {
    id: 1,
    name: "dashboard",
    title: 'vue后台模板欢迎您',
    roles: ['admin', 'user']
  },
  children: [{
    path: "index",
    component: function component(resolve) {
      return require(["@/pages/dashboard/dashboard.vue"], resolve);
    },
    meta: {
      keepAlive: true
    }
  }]
}];
var _default = routes;
exports["default"] = _default;