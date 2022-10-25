<template>
    <nav class="d-flex justify-content-around align-items-center">
        <h2>Magic-shop</h2>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/job">Job</router-link>
        <router-link to="/contact">Contact</router-link>

        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cart
            <span class="badge badge-pill badge-danger" v-show="cartCount>0">
                {{cartCount}}
            </span>
        </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p>534trg</p>
  </div>

    </nav>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: mapState(['cartCount']),
};
</script>

<style>
nav {
    height: 10vh;
}

nav h2 {
    color: #4df809;
}

nav p {
    font-size: 1.2rem
}

nav a {
    color: #0b1308;
}

nav a:hover {
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: #4df809;
}
</style>