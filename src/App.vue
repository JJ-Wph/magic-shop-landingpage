<template>
  <div id="app">
    <TheNavigation/>
    <router-view/>
  </div>
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue'

  export default {
    components:{
      TheNavigation
    }
  }
</script>

<style>
#app {
  font-family: 'VT323', monospace;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b1308;
  background-image: url('@/assets/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
}

h1 {
  font-size: 5rem;
}

h2{
  font-size: 3rem;
}
</style>
