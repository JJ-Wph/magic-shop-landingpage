<template>
    <nav class="d-flex justify-content-around align-items-center">
    <h3>Magic-shop</h3>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/assortment">Assortment</router-link>
    <router-link to="/job">Job</router-link>
    <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<style>
nav {
    height: 10vh;
}

nav h3 {
    color: #4df809;
}

nav a {
    color: #0e3052;
}

nav a:hover {
    font-style: none;
}

nav a.router-link-exact-active {
    color: #4df809;
}
</style>