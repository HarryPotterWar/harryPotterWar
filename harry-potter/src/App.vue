<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  created () {
    this.$store.dispatch('getRooms')
  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
}
</style>
