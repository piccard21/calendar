import Vue from 'vue'
import App from './App.vue'
import c01 from './components/01.vue'
import c02 from './components/02.vue'

Vue.component('c01', c01)
Vue.component('c02', c02)

new Vue({
  el: '#app',
  render: h => h(App)
})
