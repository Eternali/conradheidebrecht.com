import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'babel-polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'mdi/css/materialdesignicons.min.css'

// import './styles/debug.css'
import App from './App.vue'

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.darken2,
    secondary: colors.red.darken4,
    accent: colors.amber.darken3,
    background: colors.grey.darken4,
    error: colors.pink.darken1,
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
