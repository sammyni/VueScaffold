<template>
  <div id="account-layout">
    <Header />
    <router-view />
    <notifications group="alert" />
  </div>
</template>

<script>
import Header from "@/components/layouts/TheHeader";
export default {
  name: "Layout",
  components: { Header }
};
</script>
