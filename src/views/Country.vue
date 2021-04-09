<template>
    <div>
<h1>Countries</h1>
    <div class='col col-3'>
  <input type="search" class="form-control rounded" placeholder="Search for a country" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
    </div>
    <div class='col col-3'>
    <select class="form-control rounded">
    <option selected disabled>Filter by region</option>
    <option v-for='region in regions' :key='region.value' value='region.value'>{{ region.text}}</option>
    </select>
    </div>
    <div>
    <div class="row" style='border-style: solid;'>
     <CountryCardDetail v-for="country in countries"
      :key="country.alpha2Code"
      :countries="country" class='col col-3' style='border-style: solid;'></CountryCardDetail>   
    </div>
 
    </div>
    </div>
</template>

<script>
import CountryCardDetail from '../components/CountryCardDetail.vue';
import { mapActions, mapState } from 'vuex'
//import serviceCountry from '../services/service.js'
    export default {
        components: { CountryCardDetail },
        name:'Country',
        data(){
        return {
       /*     countries:[],
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
            ]*/
        }
        },
        /*  async mounted(){
            let response = await serviceCountry.getCountries('/all')
            this.countries = response.data
  },*/
  methods:{
      ...mapActions([
          'GetAllCountries'
      ])
  },
 async mounted(){
     await this['GetAllCountries']()
     // this.$store.dispatch('GetAllCountries')
  },
  computed:{
      /*
      regions(){
        return this.$store.state.regions
      }, 
      countries(){
          return this.$store.state.country
      }
      */
     ...mapState({
         countries: (state) => state.country,
         regions: (state) => state.regions,
     })
  }
    }
</script>

<style lang="scss" scoped>

</style>