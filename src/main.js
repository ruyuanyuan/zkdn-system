import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/_public.scss'
import '@/icons/index.js'
import SvgIcon from '@/components/SvgIcon'
import Cookies from "js-cookie";
Vue.prototype.$cookies = Cookies
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('SvgIcon',SvgIcon)
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')