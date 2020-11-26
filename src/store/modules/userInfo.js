import asyncRoutes from "../../router/asyncRoutes";
import router, { resetRouter } from "@/router";

function filterRoutes(filterRoutes, role) {
  let res = [];
  filterRoutes.forEach(route => {
    const roles = route.meta.roles;
    roles.includes(role) ? res.push(route) : "";
  });
  return res;
}
const userInfo = {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    routes(state) {
      return asyncRoutes.filter(item => item.meta.roles.includes(state.user.role));
    }
  },
  mutations: {
    editUser(state, { userName }) {
      state.userName = userName;
    },
    addUser(state, user) {
      const accessRoutes = filterRoutes(asyncRoutes, user.role);
      resetRouter();
      state.user = user;
      router.addRoutes(accessRoutes);
      state.user.routeList = accessRoutes;
    }
  },
  actions: {
    addUserInfo({ commit }, param) {
      console.log(param);
      commit("addUser", param);
    }
  }
};
export default userInfo;
