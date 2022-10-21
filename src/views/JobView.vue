<template>
  <div class="job">
    <h2>We are hiring!</h2>
    <br>
    <div class="d-flex flex-row justify-content-around">
      <div class="card" style="width: 24rem;">
        <div class="card-body">
          <h4>Junior Potion Developer</h4>
          <h5 class="card-subtitle mb-3">Requirements:</h5>
          <h6 class="card-subtitle mb-3">Bachelor degree</h6>
          <h6 class="card-subtitle mb-3">0.5+ years experience</h6>
          <h6 class="card-subtitle mb-3">Mana potions</h6>
          <h6 class="card-subtitle mb-3">Health potions</h6>
          <h6 class="card-subtitle mb-5">Basic Poisons</h6>
          <button type="button" class="btn btn-success btn-lg">Send CV</button>
        </div>
      </div>
      <div class="card" style="width: 24rem;">
        <div class="card-body">
          <h4 class="card-title">Senior Weapon Crafter</h4>
          <h5 class="card-subtitle mb-3">Requirements:</h5>
          <h6 class="card-subtitle mb-3">4+ years experience</h6>
          <h6 class="card-subtitle mb-3">Swords</h6>
          <h6 class="card-subtitle mb-3">Axes</h6>
          <h6 class="card-subtitle mb-3">Clubs</h6>
          <h6 class="card-subtitle mb-5">Shields</h6>
          <button type="button" class="btn btn-success btn-lg">Send CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'JobView',
}
</script>

<style>
 .card{
  background-color: #4df80956;
 }
</style>