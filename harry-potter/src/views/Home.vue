<template>
  <div class="home">
    <h1 @click="createRoom">Create Game</h1>
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
  height: 800px;
  background-size: cover;
}
h1 {
  color: white;
  cursor: pointer;
}
</style>
