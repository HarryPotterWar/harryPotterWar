<template>
  <div class="rooms">
    <h1>Pick A Hero</h1>
    <div class="container-hero">
        <HeroCardRoom v-for="(hero,index) in heroes" :key="index" :hero="hero" @picking-hero="setHero" ></HeroCardRoom>
      </div>
    <h1>Join A Room</h1>
    <div class="container-room">
      <room-card v-for="(room,index) in roomList" :key="index" :room="room" :heroName="chosenHero"></room-card>
    </div>
  </div>
</template>

<script>
import HeroCardRoom from '@/components/HeroCardRoom.vue'
import RoomCard from '@/components/RoomCard.vue'

export default {
  computed: {
    roomList () {
      return this.$store.state.rooms
    },
    heroes () {
      return this.$store.state.heroes
    }
  },
  components: {
    HeroCardRoom,
    RoomCard
  },
  created () {
    this.$store.dispatch('fetchHero')
    this.$store.dispatch('fetchSpell')
    this.$store.dispatch('getRooms')
  },
  methods: {
    setHero (heroName) {
      this.chosenHero = heroName
    }
  },
  data () {
    return {
      chosenHero: ''
    }
  }
}
</script>

<style scoped>
.rooms {
  background-color: black;
  min-height: 720px;
  width: 100%;
}
h1 {
  color: white;
  margin: 0;
  padding-top: 5%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.container-room {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5%;
  margin-top: 5%;
}

.container-hero {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}
</style>
