/*jshint esversion: 9*/

import VueRouter from "vue-router";
import NotFound from "@/views/PageNotFound";
import { loginPath, userDashboardPath } from "@/config/route.config";
import { checkAuth } from "@/services/api/auth.api";
import authRoutes from "./auth";
import accountRoutes from "./account";

const routes = [
  authRoutes,
  accountRoutes,
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL
});

router.beforeEach(async (to, from, next) => {
  const isProtected = to.matched.some(route => route.meta.protected);
  const isGuest = to.matched.some(route => route.meta.guest);

  if (isProtected) {
    const isAuthorized = await checkAuth();

    if (!isAuthorized) {
      return next({
        path: loginPath,
        props: {
          redirectTo: to.fullPath
        }
      });
    }

    return next();
  }

  if (isGuest) {
    const isAuthorized = await checkAuth();
    if (isAuthorized) {
      return next({
        path: userDashboardPath,
        props: {
          redirectTo: to.fullPath
        }
      });
    }
    return next();
  }

  return next();
});

export default router;
