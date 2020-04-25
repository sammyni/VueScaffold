<template>
  <div id="layout">
    <router-view />
    <notifications group="alert" />
    <notifications group="auth" />
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>
