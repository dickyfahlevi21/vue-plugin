import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false


Vue.filter('currency', function (value) {
  if (!value) return ''
  let dot = value.toString().split(".");
  dot[0]=dot[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return `Rp ${dot.join(".")}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
