<template>
  <div class="home">
    <div class="d-flex flex-column align-items-start justify-content-start">
      <h1>There is some magic stuff in this shop, and it's worth buying.</h1>
      <br>
      <h2>Magic-shop official website</h2>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: row;
  }

  .home div {
    padding: 10rem 0rem 0rem 4rem;
    width: 50vw;
    height: 50vh;
    text-align: left;
  }
</style>