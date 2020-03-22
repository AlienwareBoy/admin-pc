import asyncRoutes from '../../router/asyncRoutes'
import router, { resetRouter } from '@/router'

function filterRoutes(filterRoutes,role){
  console.log(filterRoutes,'SDFDSF')
  let res = [];
  filterRoutes.forEach(route => {
    const roles = route.meta.roles;
    if (roles.includes(role)) {
      res.push(route)
    }
  })
  console.log(res)
  return res
}
const userInfo = {
  state: {
    userid: 1,
    userName: '',
    role: '',
    routes: []
  },
  getters: {
    routes(state) {
      let list = state.routes.filter(item => item.meta.ismenu);
      return list
    }
  },
  mutations: {
    editUser(state, {
      userName
    }) {
      state.userName = userName
    },
    addUser(state, userInfo) {
      const accessRoutes=filterRoutes(asyncRoutes,userInfo.role);
      console.log('该用户拥有以下路由',accessRoutes)
      resetRouter()
      router.addRoutes(accessRoutes)
      state.routes = accessRoutes
    }
  }
}
export default userInfo
