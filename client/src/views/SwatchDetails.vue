<template>
  <div>
    <Swatch v-if="hasData" :swatch="swatch" id="swatch-details"></Swatch>
    <div v-else>No Data Available</div>
  </div>
</template>

<script>
import axios from 'axios';

import EventBus from '@/bus/EventBus';
import Swatch from '@/components/Swatch.vue';

export default {
  props: {
  },
  components: {
    Swatch
  },
  data() {
    return {
      swatch: {},
      loaded: false
    };
  },
  created() {
    this.axiosGetSwatch();
    EventBus.$on('get-random-color', this.axiosGetRandomSwatch);
  },
  computed: {
    getRandomSwatchUrl() {
      return `${this.$root.$data.host}/random`;
    }
  },
  methods: {
    getSwatchUrl(swatchId) {
      return swatchId
        ? `${this.$root.$data.host}/${swatchId}`
        : `${this.$root.$data.host}/${this.$route.params.id}`;
    },
    hasData() {
      return this.swatch;
    },
    getRandomColor() {
      const randomIndex = Math.floor(Math.random() * this.swatches.length);
      const randomSwatch = this.swatches[randomIndex];
      this.$router.push(`/${randomSwatch._id}`);
    },
    axiosGetSwatch(swatchId) {
      this.loaded = false;
      axios.get(this.getSwatchUrl(swatchId))
        .then((res) => {
          this.swatch = res.data[0];
        })
        .finally(this.loaded = true);
    },
    axiosGetRandomSwatch() {
      axios.get(this.getRandomSwatchUrl)
        .then((res) => {
          this.axiosGetSwatch(res.data[0]._id);
        });
    }
  }
};
</script>

<style>
#swatch-details {
  height: 70vh;
  border-radius: 1%;
}
#swatch-details div.swatchColor {
  height: 85%;
  border-radius: 1% 1% 0 0;
}
#swatch-details p {
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2rem;
}
</style>
