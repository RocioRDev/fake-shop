import store from "./store";
import router from "./router";

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
