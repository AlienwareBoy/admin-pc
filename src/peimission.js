import router, {
  resetRouter
} from './router'
import store from './store'
const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || '';
router.beforeEach((to, from, next) => {
  if (userInfo.id) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
    } else {
       console.log(store.state.userInfo)
      // if (store.state.userInfo.roles.length === 0) {
      //   console.log(store.state.userInfo)
      //   store.dispatch('userInfo/addUserInfo', userInfo)
      //   next({...to})
      //   return
      // }
      next()
    }
  } else {
    next()
  }
});
