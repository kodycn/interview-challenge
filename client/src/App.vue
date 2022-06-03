<template>
  <div id="app">
    <TopNavbar />
    <SideNavbar />
    <router-view class="main"/>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import SideNavbar from '@/components/SideNavbar.vue';

export default {
  props: {
  },
  components: {
    TopNavbar,
    SideNavbar
  },
  name: 'App'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro');

#app {
  font-family: 'Source Serif Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #363c3c;
}

.main {
  margin-left: 200px;
  margin-top: 5%;
}
</style>
