<template>
  <div class="hello">
    <button class="btn btn-success"
    @click="increment"
    >
    Incrementar {{ count }}
    </button>
    <br/>
    <br/>
    <p>Todos:</p>
    <code>
    {{ todos }}
    </code>
    <code>
    {{ regions }}
    </code>
    <br><br>
    <button class="btn btn-success"
    @click="getRegions()"
    >
    Obtener todo 2
    </button>
    <br>
    {{ todo }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      todo: {}
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    getTodoById(id){
      this.todo = this.$store.getters.getTodoById(id)
    },
    getRegions(){
      this.todo = this.$store.getters.getRegions()
    }
  },
  computed: {
    todos(){
      return this.$store.state.todos
    },
    count(){
      return this.$store.state.count
    },
    doneTodos(){
      return this.$store.getters.doneTodos
    }, 
    regions(){
      return this.$store.state.regions
    }   
  }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
