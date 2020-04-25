/*jshint esversion: 6*/

import Layout from "@/components/layouts/AccountLayout";
import Wallet from "@/views/Account/AccountWallet";
import Profile from "@/views/Account/AccountProfile";
import Dashboard from "@/views/Account";

import {
  userDashboardPath,
  userWalletPath,
  userProfilePath
} from "@/config/route.config";

const routes = {
  path: "/",
  component: Layout,
  meta: {
    protected: true
  },
  children: [
    {
      path: userDashboardPath,
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: userWalletPath,
      name: "Wallet",
      component: Wallet
    },
    {
      path: userProfilePath,
      name: "Profile",
      component: Profile
    }
  ]
};

export default routes;
