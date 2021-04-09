<template>
    <div>
     <img :src='countries.flag' :alt='countries.name' width='100' height='60' />
         <p>
      <router-link
          active-class="active-link"
          :to="{
            name: 'country-detail',
            params: { alpha3Code: countries.alpha3Code },
          }"
        >
          <b>{{ countries.name }}</b>
        </router-link>
    </p>
     <p><b>Population: </b> {{ countries.population }}</p>
     <p><b>Region: </b>{{ countries.region }}</p>
     <p><b>Capital: </b>{{ countries.capital }}</p>
    </div>
</template>

<script>
    export default {
        props: ["countries"]
    }
</script>

<style lang="scss" scoped>

</style>