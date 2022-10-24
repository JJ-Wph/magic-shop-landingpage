<template>
    <nav class="d-flex justify-content-around align-items-center">
    <h2>Magic-shop</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/shop">Shop</router-link>
    <router-link to="/job">Job</router-link>
    <router-link to="/contact">Contact</router-link>
    <button class="btn btn-primary px-4">Cart</button>
    </nav>
</template>

<style>
nav {
    height: 10vh;
}

nav h2 {
    color: #4df809;
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