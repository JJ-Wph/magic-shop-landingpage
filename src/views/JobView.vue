<template>
  <div class="job">
    <h2>We are hiring!</h2>
    <br>
    <div class="d-flex flex-row justify-content-around">
      <div class="pixel-borders--2 blur col-md-4 col-sm-5 m-1">
        <div class="card-body">
          <h2 class="pixel-box--success">Potion Developer</h2>
          <h3><strong>Requirements:</strong></h3>
          <p>Bachelor degree</p>
          <p>0.5+ years experience</p>
          <p>Mana potions</p>
          <p>Health potions</p>
          <p>Basic Poisons</p>
          <button @click="sendCV" class="pixel-box--success btn-lg">Send CV</button>
        </div>
      </div>
      <div class="pixel-borders--2 blur col-md-4 col-sm-5 m-1">
        <div class="card-body">
          <h2 class="pixel-box--success">Weapon Crafter</h2>
          <h3><strong>Requirements:</strong></h3>
          <p>4+ years experience</p>
          <p>Swords</p>
          <p>Axes</p>
          <p>Clubs</p>
          <p>Shields</p>
          <button @click="sendCV" class="pixel-box--success btn-lg">Send CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JobView',

    methods: {
      sendCV(){
        window.alert('Thank you, Your CV has been send')
      }
    }
  }
</script>