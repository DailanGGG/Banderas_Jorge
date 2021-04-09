import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services/service'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count: 0,
        todos: [
            {id: 1, text: 'Lorem ipsum', done: true},
            {id: 2, text: 'Dolor sit amet', done: false}
        ],
        country:[],
        countryDetails:[],
        regions: [
            {
                value: 'Africa',
                text: 'África',
            },
                            {
                value: 'Americas',
                text: 'America',
            },
                            {
                value: 'Asia',
                text: 'Asia',
            },
                            {
                value: 'Europe',
                text: 'Europa',
            },
            {
                value: 'Oceania',
                text: 'Oceania',
            },
        ],
    },
    mutations:{
        increment(state){
            state.count++
        },
        SET_COUNTRIES(state, payload){
            state.country = payload
        },
        SET_COUNTRIES_DETAILS(state, payload){
            state.countryDetails = payload
        }
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) =>{
            return state.todos.find(todo => todo.id == id)
        },
        getRegions: state => {
            return state.regions
        }
    },
    actions: {
        actionIncrement(context) {
            context.commit('increment')
        },
        async GetAllCountries({commit}){
            let response = await Services.getCountries('/all')
            commit('SET_COUNTRIES', response.data)
        },
        async GetCountryDetail({commit}, countryCode){
            let response = await Services.getDetail(countryCode)
            commit('SET_COUNTRIES_DETAILS', response.data)
       }
}
})

export default store