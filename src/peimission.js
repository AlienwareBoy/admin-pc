import router, {
  resetRouter
} from './router'
import store from './store'
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(store.state.userInfo.routes, 'store.state.userInfo.routes')
  // if (!store.state.userInfo.id) {
  //   next({path:'/login'})
  // }
  if (to.path === '/login') {
    next()
  } else {
    try {
      next()
    } catch (err) {
      console.log(err)
    }


  }
});
