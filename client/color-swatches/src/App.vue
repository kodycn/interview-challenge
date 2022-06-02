<template>
  <div id="app">
    <TopNavbar />
    <div class="d-flex">
      <SideNavbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue'
import SideNavbar from '@/components/SideNavbar.vue'

export default {
  props: {
  },
  components: {
    TopNavbar,
    SideNavbar
  },
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro');
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

#app {
  font-family: 'Source Serif Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #363c3c;
}
</style>
