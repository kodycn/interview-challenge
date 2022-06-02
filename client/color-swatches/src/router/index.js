import Vue from 'vue'
import Router from 'vue-router'
import AllColors from '@/views/AllColors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AllColors
    }
  ]
})
