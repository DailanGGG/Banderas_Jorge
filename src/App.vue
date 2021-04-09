<template>
  <div id="app">
<!--<Country></Country>-->
<!--<Hello></Hello>-->
<router-view></router-view>
  </div>
</template>

<script>
//import Country from './views/Country.vue'
//import Hello from './components/HelloWorld.vue'
export default {
  name: 'App',
  //components: {
  //  Country //, Hello
 // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
