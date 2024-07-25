<template>
  <ListaDeJuegos />
</template>

<script>
import ListaDeJuegos from './components/ListaDeJuegos.vue'

export default {
  name: 'App',
  components: {
    ListaDeJuegos,
  }
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
