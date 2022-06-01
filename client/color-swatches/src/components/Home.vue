<template>
  <div>
    <h2>Home Page</h2>
    <b-card>
      <b-row>
        <b-col lg="4" md="4" sm="12" v-for="(swatch, index) in swatches" :key="index">
          <Swatch :swatch="swatch"></Swatch>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'

import Swatch from './Swatch.vue'

export default {
  props: {
  },
  components: {
    Swatch
  },
  data () {
    return {
      swatches: []
    }
  },
  created () {
    this.axiosGet()
  },
  computed: {
    getUrl () {
      return `${this.$root.$data.host}/api/swatches/`
    }
  },
  methods: {
    axiosGet () {
      axios.get(this.getUrl)
        .then((res) => {
          this.swatches = res.data
        })
    }
  }
}
</script>
