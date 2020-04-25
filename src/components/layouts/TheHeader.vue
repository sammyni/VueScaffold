<template>
  <div id="nav">
    <router-link :to="userDashboardPath">Dashboard</router-link> |
    <router-link :to="userWalletPath">Wallet</router-link> |
    <router-link :to="userProfilePath">Profile</router-link> |
  </div>
</template>

<script>
import {
  userDashboardPath,
  userWalletPath,
  userProfilePath
} from "@/config/route.config";
export default {
  name: "Header",
  data() {
    return {
      userDashboardPath,
      userWalletPath,
      userProfilePath
    };
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
