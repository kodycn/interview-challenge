// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  ModalPlugin
} from 'bootstrap-vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

// global components
import './globalComponents'

// BSV Plugin Registration
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(ModalPlugin)

Vue.config.productionTip = false
Vue.config.port = '4000'

const configServer = {
  host: Vue.config.productionTip
    ? `http://production:${Vue.config.port}`
    : `http://localhost:${Vue.config.port}`
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: configServer,
  components: { App },
  template: '<App/>'
})
