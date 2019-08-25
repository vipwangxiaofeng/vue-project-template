import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/styles/index.scss' // global css
import '@/icons' // icon
// flex 布局库
import 'flex.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
