<template>
  <div id="app" v-switch-title="$route.meta.title">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  min-width: 960px;
}
</style>
