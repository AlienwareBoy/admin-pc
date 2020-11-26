"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(require("@/components/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var asyncList = [{
  path: "/roles",
  name: "roles",
  component: _layout["default"],
  meta: {
    id: 1,
    ismenu: true,
    menuTitle: '权限管理',
    roles: ['admin']
  },
  children: [{
    path: "addUser",
    name: "addUser",
    component: function component(resolve) {
      return require(["@/pages/addUser/addUser.vue"], resolve);
    },
    meta: {
      name: "addUser",
      title: "增加用户",
      keepAlive: false
    }
  }]
}, {
  path: "/tables",
  name: "tables",
  component: _layout["default"],
  meta: {
    id: 2,
    ismenu: true,
    menuTitle: '表单管理',
    roles: ['admin', 'user']
  },
  children: [{
    path: "studentTable",
    name: "studentTable",
    component: function component(resolve) {
      return require(["@/pages/table/studentTable.vue"], resolve);
    },
    meta: {
      menuTitle: '表单管理',
      title: "学生表单",
      keepAlive: false
    }
  }, {
    path: "teacherTable",
    name: "teacherTable",
    component: function component(resolve) {
      return require(["@/pages/table/teacherTable.vue"], resolve);
    },
    meta: {
      menuTitle: '表单管理',
      title: "老师表单",
      keepAlive: false
    }
  }, {
    path: "friendsTable",
    name: "friendsTable",
    component: function component(resolve) {
      return require(["@/pages/table/friendsTable.vue"], resolve);
    },
    meta: {
      menuTitle: '表单管理',
      title: "同学表单",
      keepAlive: false
    }
  }]
}];
var _default = asyncList;
exports["default"] = _default;