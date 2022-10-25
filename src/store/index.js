import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartCount: 0,
    cart: [],
    items: [
      {name: 'Sharp Sword', img: require('@/assets/sword.png'), price: 13.95, count:0},
      {name: 'Fire Ring', img: require('@/assets/ring.png'), price: 16.75, count:0},
      {name: 'Health Potion', img: require('@/assets/health.png'), price: 6.95, count:0},
      {name: 'Mana Potion', img: require('@/assets/mana.png'), price: 6.95, count:0},
      {name: 'Magic Shield', img: require('@/assets/shield.png'),  price: 25.95, count:0},
      {name: 'Ice Staff', img: require('@/assets/ice.png'),  price: 19.95, count:0},
    ],

  },
  getters: {
  },
  mutations: {
    addToCart: state => {
      state.cartCount++;
    },
    removeFromCart: state => {
      state.cartCount--;
    }
  },
  actions: {
  },
  modules: {
  }
})
