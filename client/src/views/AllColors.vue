<template>
  <div>
    <b-row>
      <b-col
        lg="3"
        md="4"
        sm="12"
        v-for="(swatch, index) in swatchesPerPage"
        :key="index"
      >
        <Swatch :swatch="swatch" :clickable="true"></Swatch>
      </b-col>
    </b-row>
    <b-pagination
      class="mt-5"
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="center"
      first-number
      last-number
    >
    </b-pagination>
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
      swatches: [],
      currentPage: 1,
      perPage: 12
    };
  },
  created() {
    this.axiosGet();
    EventBus.$on('get-random-color', this.getRandomColor);
  },
  computed: {
    swatchesPerPage() {
      return this.swatches.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    getUrl() {
      console.log('this.$root.$data:', this.$root.$data);
      return `${this.$root.$data.host}/`;
    },
    totalRows() {
      return this.swatches.length;
    }
  },
  methods: {
    axiosGet() {
      axios.get(this.getUrl)
        .then((res) => {
          this.swatches = res.data;
        });
    },
    getRandomColor() {
      const randomIndex = Math.floor(Math.random() * this.swatches.length);
      const randomSwatch = this.swatches[randomIndex];
      this.$router.push(`/${randomSwatch._id}`);
    }
  }
};
</script>

<style>
/* removes next and previous buttons */
ul.pagination li:first-child,
ul.pagination li:last-child{
  display: none;
}

/* default styling for pagination buttons */
.page-item .page-link{
  color: black !important;
  border: none;
}

/* styling for current page button */
.page-item.active .page-link{
  background-color: transparent;
  text-decoration: underline;
  font-weight: 900;
}
</style>
