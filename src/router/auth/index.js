/*jshint esversion: 9*/

import Auth from "@/views/Auth/index.vue";
import Layout from "@/components/layouts/DefaultLayout";

import { loginPath } from "@/config/route.config";

const routes = {
  path: "/auth/*",
  component: Layout,
  meta: {
    guest: false
  },
  children: [
    {
      path: loginPath,
      name: "Auth",
      component: Auth
    }
  ]
};

export default routes;
