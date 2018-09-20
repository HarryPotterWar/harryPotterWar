<template>
  <div class="card" v-if="hero.role" @click="goToWaitingRoom">
   <h2>Name : <br>{{hero.name}} <br></h2>
   <h2>House :<br>{{hero.house || "None"}}</h2>
   <h2>Role :<br>{{hero.role || "None"}}</h2>
  </div>
</template>

<script>
import database from '../assets/config.js'

export default {
  name: 'HeroCard',
  props: ['hero', 'roomId'],
  methods: {
    goToWaitingRoom () {
      database.ref('/' + this.roomId + '/player1').set({
        name: this.hero.name,
        health: 100
      })
      this.$emit('wait-room')
    }
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  color: black;
  width: 200px;
  min-height: 120px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  padding: 5px 5px;
}

h2 {
  font-size: 14px;
  padding: 0;
  margin: 0;
}
</style>
