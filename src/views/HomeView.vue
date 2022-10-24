<template>
  <div class="home">
    <div class="d-flex flex-column align-items-start justify-content-start">
      <h1>There is some magic stuff in this shop, and it's worth buying.</h1>
      <br>
      <h3>Magic-shop official website</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>
  .about,
  .home,
  .shop {
    width: 100vw;
    height: 90vh;
    padding: 8rem;
  }

  .shop {
    padding: 1rem;
  }

  .about div,
  .home h1 {
    width: 50vw;
    text-align: left;    
  }

</style>