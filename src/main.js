// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Import components
import Customers from './components/Customers.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path:'/', component:Customers },
    { path:'/about', component:About },
    { path:'/add', component:Add },
    { path:'/customer/:id', component:CustomerDetails },
    { path:'/edit/:id', component:Edit }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
