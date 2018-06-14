import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'babel-polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'mdi/css/materialdesignicons.min.css'

import './styles/themes.styl'

// import './styles/debug.css'
import App from './App.vue'

// currently I have to replicate this for both javascript and css use
Vue.use(Vuetify, {
  theme: {
    primary: '#00796b',
    secondary: '#b71c1c',
    accent: '#ff8f00',
    background: '#212121',
    error: '#d81b60',
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
