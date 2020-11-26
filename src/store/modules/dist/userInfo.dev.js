"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _asyncRoutes = _interopRequireDefault(require("../../router/asyncRoutes"));

var _router = _interopRequireWildcard(require("@/router"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function filterRoutes(filterRoutes, role) {
  var res = [];
  filterRoutes.forEach(function (route) {
    var roles = route.meta.roles;
    roles.includes(role) ? res.push(route) : "";
  });
  return res;
}

var userInfo = {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    routes: function routes(state) {
      return _asyncRoutes["default"].filter(function (item) {
        return item.meta.roles.includes(state.user.role);
      });
    }
  },
  mutations: {
    editUser: function editUser(state, _ref) {
      var userName = _ref.userName;
      state.userName = userName;
    },
    addUser: function addUser(state, user) {
      var accessRoutes = filterRoutes(_asyncRoutes["default"], user.role);
      (0, _router.resetRouter)();
      state.user = user;

      _router["default"].addRoutes(accessRoutes);

      state.user.routeList = accessRoutes;
    }
  },
  actions: {
    addUserInfo: function addUserInfo(_ref2, param) {
      var commit = _ref2.commit;
      console.log(param);
      commit("addUser", param);
    }
  }
};
var _default = userInfo;
exports["default"] = _default;