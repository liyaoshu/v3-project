import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", 
      redirect: "/login" 
    },
    {
      path: "/login",
      name: "loginIndex",
      meta: {
        title: "登录"
      },
      component: () => import("@/views/login.vue")
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | vue-manage-system`;
//   const role = localStorage.getItem("ms_username");
//   //   const permiss = usePermissStore();
//   if (!role && to.path !== "/login") {
//     next("/login");
//   }
//   //   else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
//   //     // 如果没有权限，则进入403
//   //     next("/403");
//   //   }
//   else {
//     next();
//   }
// });
export default router;
