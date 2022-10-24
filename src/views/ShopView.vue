<template>
  <div class="shop d-flex flex-wrap justify-content-center align-items-center">
    <div v-for="item in items" :key=item.name>
      <div class="d-flex m-1 flex-column align-items-center justify-content-between pixel-borders--2 blur p-2" style="width: 30rem; height: 15rem;">
        <h4><strong>{{item.name}}</strong></h4>
        <img :src=item.img :alt=item.name width='60px'>
        <p>Price: {{item.price}}</p>
        <div class="d-flex align-items-center justify-content-center p-2">
          <button @click="item.count--" :disabled="item.count === 0" class="btn btn-danger m-2">-</button>
          <h4 class="align-items-center">{{item.count}}</h4>
          <button @click="item.count++" class="btn btn-success m-2">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShopView',

  data() {
    return {
      items: [
        {name: 'Sharp Sword', img: require('@/assets/sword.png'), price: 13.95, count:0},
        {name: 'Fire Ring', img: require('@/assets/ring.png'), price: 16.75, count:0},
        {name: 'Health Potion', img: require('@/assets/health.png'), price: 6.95, count:0},
        {name: 'Mana Potion', img: require('@/assets/mana.png'), price: 6.95, count:0},
        {name: 'Magic Shield', img: require('@/assets/shield.png'),  price: 25.95, count:0},
        {name: 'Ice Staff', img: require('@/assets/ice.png'),  price: 19.95, count:0},
      ],
    }
  },

};

</script>