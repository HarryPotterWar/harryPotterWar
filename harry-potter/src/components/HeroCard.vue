<template>
  <div class="card" v-if="hero.role">
   <h2>Name : <br>{{hero.name}} <br></h2>
   <h2>House :<br>{{hero.house || "None"}}</h2>
   <h2>Role :<br>{{hero.role || "None"}}</h2>

  </div>
</template>

<script>
export default {
  name: 'HeroCard',
  props: ['hero']
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
