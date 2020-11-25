import asyncRoutes from '../../router/asyncRoutes'
import router, {
  resetRouter
} from '@/router'

function filterRoutes(filterRoutes, role) {
  let res = [];
  filterRoutes.forEach(route => {
    const roles = route.meta.roles;
    roles.includes(role) ? res.push(route) : ''
  })
  return res
}
const userInfo = {
  namespaced: true,
  state:{
    user:{}
  },
  getters: {
    routes(state) {
      let list = asyncRoutes.filter(item => item.meta.roles);
      return list
    },
  },
  mutations: {
    editUser(state, {
      userName
    }) {
      state.userName = userName
    },
    addUser(state, user) {
      const accessRoutes = filterRoutes(asyncRoutes,user.roles);
      resetRouter()
      console.log(user,'user')
      state.user=user;
      state.user.routeList=accessRoutes;
      console.log(state,'state')
      router.addRoutes(accessRoutes)
    }
  },
  actions:{
    addUserInfo({commit},param){
      console.log(param)
      commit('addUser',param)
    }
  }
}
export default userInfo
