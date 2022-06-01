<template>
  <b-card no-body>
    <div class="swatch" :style=backgroundColor></div>
    <b-card-text>
      <b>Color</b>
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
.swatch {
  height: 200px;
  width: auto;
}
</style>
