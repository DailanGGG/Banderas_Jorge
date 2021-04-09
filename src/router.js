import Vue from "vue"
import Router from "vue-router"
import Country from "./views/Country"
import CountryDetail from "./views/CountryDetail"

Vue.use(Router)
export default new Router ({
mode: 'history',
routes: [

    {
        path: '/',
        name: 'contry',
        component: Country
    },
    {
        path: '/:alpha3Code/details',
        name: 'country-detail',
        component: CountryDetail,
        props: true
    }

]

})