export default {
    increment(state){
        state.count++
    },
    SET_COUNTRIES(state, payload){
        state.country = payload
    },
    SET_COUNTRIES_DETAILS(state, payload){
        state.countryDetails = payload
    }
}