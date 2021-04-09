import Vue from 'vue'
import Vuex from 'vuex'
import Country from './modules/country/store'

Vue.use(Vuex)

const store = new Vuex.Store({
modules: {
country: Country
}
})

export default store