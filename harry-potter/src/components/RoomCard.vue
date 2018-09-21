<template>
  <div class="room-card">
    <h2>{{room.roomName}}</h2>
    <h3 @click="joinRoom" v-if="available">Join Room</h3>
  </div>
</template>

<script>
import database from '../assets/config'

export default {
  props: ['room', 'heroName'],
  data () {
    return {}
  },
  methods: {
    joinRoom () {
      database.ref('/' + this.room.roomName + '/player2').set({
        name: this.heroName.name,
        url: this.heroName.url,
        health: 100
      })
      this.$router.push(`/battle/${this.room.roomName}`)
    }
  },
  computed: {
    available () {
      if (this.room.players.length === 2) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style>
.room-card {
  background-color: white;
  color: black;
  width: 300px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

h3 {
  cursor: pointer;
}
</style>
