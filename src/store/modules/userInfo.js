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
  state: {
    userid: 1,
    userName: '',
    role: '',
    routeList: []
  },
  getters: {
    routes(state) {
      let list = state.routeList.filter(item => item.meta.ismenu);
      return list
    },
  },
  mutations: {
    editUser(state, {
      userName
    }) {
      state.userName = userName
    },
    addUser(state, {userName,userid,role}) {
      const accessRoutes = filterRoutes(asyncRoutes,role);
      resetRouter()
      state.userName=userName;
      state.userid=userid;
      state.role=role;
      state.routeList=accessRoutes;
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
