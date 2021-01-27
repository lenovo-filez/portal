import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import { initVueInstanceProps } from '../dist/portal.esm'
Vue.config.productionTip = false
// 这里初始化portal，这里可以传入store或者i18n等挂载在Vue实例上的
initVueInstanceProps({})
new Vue({
  render: h => h(App),
}).$mount('#app')
