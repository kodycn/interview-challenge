<template>
  <b-nav vertical>
    <b-nav-form>
      <b-button>Random Color</b-button>
    </b-nav-form>
    <b-nav-item><router-link to="/">All Colors</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/red">Red</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/orange">Orange</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/yellow">Yellow</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/green">Green</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/blue">Blue</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/purple">Purple</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/brown">Brown</router-link></b-nav-item>
    <b-nav-item disabled><router-link to="/gray">Gray</router-link></b-nav-item>
  </b-nav>
</template>

<script>

export default {
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
/* Styles side navbar */
li > a.nav-link > a {
  color: #363c3c;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 1rem 1rem;
  width: auto;
  text-align: left;
  background-color: #d6d8d8;
  height: 95vh;
}
li.nav-item {
  width: 10rem;
}
</style>
