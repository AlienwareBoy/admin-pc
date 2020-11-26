import Layout from '@/components/layout'
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
      component: resolve => require(["@/pages/addUser/addUser.vue"], resolve),
      meta: {
        name: "addUser",
        title: "增加用户",
        keepAlive: false
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
      component: resolve => require(["@/pages/table/studentTable.vue"], resolve),
      meta: {
        menuTitle: '表单管理',
        title: "学生表单",
        keepAlive: false
      },
    }, {
      path: "teacherTable",
      name: "teacherTable",
      component: resolve => require(["@/pages/table/teacherTable.vue"], resolve),
      meta: {
        menuTitle: '表单管理',
        title: "老师表单",
        keepAlive: false
      },
    }, {
      path: "friendsTable",
      name: "friendsTable",
      component: resolve => require(["@/pages/table/friendsTable.vue"], resolve),
      meta: {
        menuTitle: '表单管理',
        title: "同学表单",
        keepAlive: false
      },
    }]
  }
]

export default asyncList
