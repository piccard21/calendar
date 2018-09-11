import Vue from 'vue'
import App from './App.vue'
import c01 from './components/01.vue'

Vue.component('c01', c01)

new Vue({
  el: '#app',
  render: h => h(App)
})
