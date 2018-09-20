<template>
  <div class="create">
    <div class="container">
      <h1>Create A Room</h1>
      <input type="text" placeholder="room name" v-model="roomId">
      <div class="container-hero">
        <hero-card v-for="(hero,index) in heroes" :key="index" :hero="hero" @wait-room="goToWaitingRoom" :roomId="roomId"></hero-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroCard from '@/components/HeroCard.vue'

export default {
  components: {
    HeroCard
  },
  name: 'home',
  data () {
    return {
      hero: {},
      roomId: ''
    }
  },
  created () {
    this.$store.dispatch('fetchHero')
    this.$store.dispatch('fetchSpell')
    this.$store.dispatch('getRooms')
  },
  computed: {
    heroes () {
      return this.$store.state.heroes
    },
    spells () {
      return this.$store.state.spells
    }
  },
  methods: {
    goToWaitingRoom () {
      this.$router.push(`/battle/${this.roomId}`)
    }
  }
}
</script>

<style scoped>
html {
  padding: 0;
  margin: 0;
  font-family: 'Lato';
}
body {
  padding: 0;
  margin: 0;
}
.create {
  margin-top: -20px;
  width: 100%;
  min-height: 800px;
  background-size: cover;
  background-color: black;
  padding-bottom: 5%;
}
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  height: 30px;
  width: 300px;
}
.container {
  padding-top: 10%;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.container-hero {
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 80%;
}
</style>
