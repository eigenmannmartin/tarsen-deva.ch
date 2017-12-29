import Vue from 'vue'
import VueScrollto from 'vue-scrollto'

Vue.use(VueScrollto, {
  container: '#app',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
