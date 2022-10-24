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
  font-size: 4rem;
}

h3{
  font-size: 3rem;
}

h4{
  font-size: 2.5rem;
}

p{
  font-size: 1.5rem;
  margin: 0;
}

.blur {
  backdrop-filter: blur(10px);
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
</style>
