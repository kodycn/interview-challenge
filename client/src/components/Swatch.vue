<template>
  <b-card no-body class="swatch" align="left">
    <div
      class="swatchColor"
      :style="{
        backgroundColor: swatch.color,
        cursor: (clickable ? 'pointer' : 'default')
      }"
      @click="clickable ? getSwatchDetails(swatch._id) : ''"
    ></div>
    <b-card-text class="swatch-desc">
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
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getSwatchDetails(swatchId) {
      this.$router.push(`/${swatchId}`);
    }
  }
};
</script>

<style scoped>
.swatchColor {
  height: 9rem;
  width: auto;
  border-radius: 3% 3% 0 0;
}
.swatch {
  margin: 0.5rem 1rem;
}
.card {
  border-radius: 3%;
  box-shadow: 0px 0px 1px grey;
}
.swatch-desc {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}
</style>
