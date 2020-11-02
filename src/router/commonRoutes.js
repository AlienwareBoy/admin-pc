import Layout from '@/components/layout'
const routes = [{
  path: "/",
  name: "login",
  component: resolve => require(["@/views/login/login.vue"], resolve),
  meta: {
    name: "login",
    title: "登录",
    keepAlive: true
  }
}, {
  path: "/404",
  name: "error",
  component: resolve => require(["@/views/404.vue"], resolve),
  meta: {
    name: "404",
    title: "数据异常",
    keepAlive: false
  }
}, {
  path: "/dashboard",
  name: "dashboard",
  component: Layout,
  meta: {
    id: 1,
    name: "dashboard",
    title: 'vue后台模板欢迎您',
    roles: ['admin', 'user']
  },
  children: [{
    path: "index",
    component: resolve => require(["@/views/dashboard/dashboard.vue"], resolve),
    meta: {
      keepAlive: true
    }
  }]
}]

export default routes
