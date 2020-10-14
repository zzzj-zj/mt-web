// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/main.css'
import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function () {
    // 聚焦元素
    var bindings = arguments[1]
    document.addEventListener('click', bindings.value, false)
  }
})

Vue.directive('switch-title', function () {
  // 聚焦元素
  var bindings = arguments[1]
  document.title = bindings.value
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
