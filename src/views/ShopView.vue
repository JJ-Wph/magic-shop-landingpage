<template>
  <div class="shop d-flex flex-wrap justify-content-center align-items-center">
    <div v-for="item in items" :key=item.name>
      <div class="d-flex m-1 flex-column align-items-center justify-content-between pixel-borders--2 blur p-2" style="width: 25vw; height: 30vh;">
        <h3><strong>{{item.name}}</strong></h3>
        <img class="img-fluid" :src=item.img :alt=item.name>
        <p>Price: {{item.price}}</p>
        <div class="d-flex align-items-center justify-content-center p-2">
          <button @click="item.count--; minus()" :disabled="item.count === 0" class="btn btn-danger m-2">-</button>
          <h3 class="align-items-center">{{item.count}}</h3>
          <button @click="item.count++; plus()" class="btn btn-success m-2">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'ShopView',
    computed: {
      ...mapState(['items']),
      cartCount(){
        return this.$store.state.cartCount;
      },
    },

    methods: {
      plus() {this.$store.commit('addToCart')},
      minus() {this.$store.commit('removeFromCart')}
    },
  };
</script>

<style scoped>
  @media (max-width: 768px){
      button {
          padding: 0.25rem 0.5rem 0.25rem 0.5rem;
      }
  }
</style>