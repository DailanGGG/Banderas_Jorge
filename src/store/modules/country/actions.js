import Services from './services/service'

export default {
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