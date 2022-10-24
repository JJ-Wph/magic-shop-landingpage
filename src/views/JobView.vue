<template>
  <div class="job">
    <h2>We are hiring!</h2>
    <br>
    <div class="d-flex flex-row justify-content-around">
      <div class="pixel-borders--2 blur" style="width: 26rem;">
        <div class="card-body">
          <h3 class="pixel-box--success">Junior Potion Developer</h3>
          <h4 class="card-subtitle mb-3">Requirements:</h4>
          <p class="card-subtitle mb-3">Bachelor degree</p>
          <p class="card-subtitle mb-3">0.5+ years experience</p>
          <p class="card-subtitle mb-3">Mana potions</p>
          <p class="card-subtitle mb-3">Health potions</p>
          <p class="card-subtitle mb-5">Basic Poisons</p>
          <button class="pixel-box--success">Send CV</button>
        </div>
      </div>
      <div class="pixel-borders--2 blur" style="width: 26rem;">
        <div class="card-body">
          <h3 class="pixel-box--success">Senior Weapon Crafter</h3>
          <h4 class="card-subtitle mb-3">Requirements:</h4>
          <p class="card-subtitle mb-3">4+ years experience</p>
          <p class="card-subtitle mb-3">Swords</p>
          <p class="card-subtitle mb-3">Axes</p>
          <p class="card-subtitle mb-3">Clubs</p>
          <p class="card-subtitle mb-5">Shields</p>
          <button class="pixel-box--success button">Send CV</button>
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