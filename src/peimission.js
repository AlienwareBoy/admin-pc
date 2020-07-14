import router, {
  resetRouter
} from './router'
import store from './store'
const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || '';
router.beforeEach((to, from, next) => {
  if (userInfo.userid) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
    } else {
      if (store.state.userInfo.routeList.length === 0) {
        store.dispatch('userInfo/addUserInfo', userInfo)
        next({...to})
        return
      }
      next()
    }
  } else {
    next()
  }
});
