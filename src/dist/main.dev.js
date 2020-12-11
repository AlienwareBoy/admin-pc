"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./router/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from "./store";
// import ElementUI from "element-ui";
// import 'element-ui/lib/theme-chalk/index.css';
// import "./scss/index.scss";
// Vue.config.productionTip = false;
_vue["default"].use(ElementUI);

new _vue["default"]({
  router: _index["default"],
  store: store,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");