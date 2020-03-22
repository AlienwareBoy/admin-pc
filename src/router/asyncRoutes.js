import Layout from 'Layout/index'
const asyncList = [{
    path: "/roles",
    name: "roles",
    component: Layout,
    meta: {
      id: 1,
      ismenu: true,
      menuTitle: '权限管理',
      roles: ['admin']
    },
    children: [{
      path: "addUser",
      name: "addUser",
      component: resolve => require(["VIEW/addUser/addUser.vue"], resolve),
      meta: {
        name: "addUser",
        title: "增加用户",
        keepAlive: true
      }
    }]
  },
  {
    path: "/tables",
    name: "tables",
    component: Layout,
    meta: {
      id: 2,
      ismenu: true,
      menuTitle: '表单管理',
      roles: ['admin', 'user']
    },
    children: [{
      path: "studentTable",
      name: "studentTable",
      component: resolve => require(["VIEW/table/studentTable.vue"], resolve),
      meta: {
        menuTitle: '表单管理',
        title: "学生表单",
        keepAlive: true
      },
    }, {
      path: "teacherTable",
      name: "teacherTable",
      component: resolve => require(["VIEW/table/teacherTable.vue"], resolve),
      meta: {
        menuTitle: '表单管理',
        title: "老师表单",
        keepAlive: false
      },
    }, {
      path: "friendsTable",
      name: "friendsTable",
      component: resolve => require(["VIEW/table/friendsTable.vue"], resolve),
      meta: {
        menuTitle: '表单管理',
        title: "同学表单",
        keepAlive: false
      },
    }]
  }
]

export default asyncList
