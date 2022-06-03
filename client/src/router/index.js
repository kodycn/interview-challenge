import Vue from 'vue';
import Router from 'vue-router';
import AllColors from '@/views/AllColors';
import SwatchDetails from '@/views/SwatchDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AllColors
    },
    {
      path: '/:id',
      name: 'Swatch',
      component: SwatchDetails
    }
  ]
});
