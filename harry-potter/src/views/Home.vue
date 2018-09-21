<template>
  <div class="home">
    <div class="menu">
      <h1 @click="createRoom">Create Game</h1>
      <h1 @click="joinGame">Join Game</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    createRoom () {
      this.$router.push('/create')
    },
    joinGame () {
      this.$router.push('/rooms')
    }
  }
}
</script>

<style>
html {
  padding: 0;
  margin: 0;
  font-family: 'Lato';
}
body {
  padding: 0;
  margin: 0;
}
.home {
  margin-top: -20px;
  background-image: url('../../public/harrypotterhome.jpg');
  width: 100%;
  min-height: 900px;
  background-size: cover;
}
h1 {
  color: white;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.menu {
  padding-top: 45%;
}
</style>
