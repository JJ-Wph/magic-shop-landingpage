<template>
  <div id="app">
    <TheNavigation/>
    <transition name="slide" mode="out-in" appear>
      <router-view/>
    </transition>
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
@import "../public/pixel-borders.css";

#app {
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b1308;
  background-image: url('@/assets/background.png');
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0;
}

h1 {
  font-size: 3rem;
  margin: 0;
}

h2{
  font-size: 2rem;
  margin: 0;
}

h3{
  font-size: 1rem;
  margin: 0;
}

p{
  font-size: 1.2rem;
  margin: 0;
}

.slide-enter-active{
  transition: .5s;
}

.slide-leave-active{
  transition: .5s;
}

.slide-enter, .slide-leave-to{
  opacity: 0;
}

.slide-leave, .slide-enter-to{
  opacity: 1;
}

.blur {
  backdrop-filter: blur(5px);
}
</style>
