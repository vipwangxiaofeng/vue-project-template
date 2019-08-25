import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getters from './getters'
// import app from "./modules/app";
// import settings from "./modules/settings";
// import user from "./modules/user";
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

const store = new Vuex.Store({
	modules,
	getters,
})

export default store
