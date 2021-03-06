import Vue from "vue";
import Router from "vue-router";
import routes from "./commonRoutes";
import asyncRoutes from "./asyncRoutes";
import { Message } from "element-ui";
Vue.use(Router);
// 新版本冲突 修复代码
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...routes, ...asyncRoutes]
  });

const router = createRouter();

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (!token) {
    next();
  } else {
    next()
  }
});
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
