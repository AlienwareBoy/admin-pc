"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetRouter = resetRouter;
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _commonRoutes = _interopRequireDefault(require("./commonRoutes"));

var _asyncRoutes = _interopRequireDefault(require("./asyncRoutes"));

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_vue["default"].use(_vueRouter["default"]); // 新版本冲突 修复代码


var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var createRouter = function createRouter() {
  return new _vueRouter["default"]({
    // mode: 'history', // require service support
    scrollBehavior: function scrollBehavior() {
      return {
        y: 0
      };
    },
    routes: [].concat(_toConsumableArray(_commonRoutes["default"]), _toConsumableArray(_asyncRoutes["default"]))
  });
};

var router = createRouter();
router.beforeEach(function (to, from, next) {
  var token = localStorage.getItem("token");

  if (!token) {
    next();
  } else {
    next();
  }
}); // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465

function resetRouter() {
  var newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

var _default = router;
exports["default"] = _default;