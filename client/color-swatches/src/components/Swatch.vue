<template>
  <b-card no-body class="swatch" align="left">
    <div class="swatchColor" :style=backgroundColor></div>
    <b-card-text class="my-2 ml-3">
      {{ swatch.color }}
    </b-card-text>
  </b-card>
</template>

<script>

export default {
  props: {
    swatch: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    backgroundColor () {
      return `background-color: ${this.swatch.color}`
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.swatchColor {
  height: 10rem;
  width: auto;
  border-radius: 5% 5% 0 0;
}
.swatch {
  margin: 0.5rem 1rem;
}
.card {
  border-radius: 5%;
  box-shadow: 0px 0px 1px grey;
}
</style>
