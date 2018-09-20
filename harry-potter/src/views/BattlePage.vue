<template>
<div class="page-battle">
  <div class="battle">
    <div>
      <h3>{{heroname1}}</h3>
      <div class="box"></div>
      <img src="../../public/helmypotter.png" alt="">
    </div>
    <div>
      <h3>{{heroname2}}</h3>
      <div class="box"></div>
        <img src="../../public/Harry_Potter.png" alt="">
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      heroname1: 'Helmi Potter',
      heroname2: 'Harry Potter'
    }
  }
}
</script>

<style scoped>
.battle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.page-battle {
  grid-gap: 40px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-image: url('../../public/hogwarts.jpg');
  background-size: cover;
  height: 820px;
}

.box {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
}

h3 {
  margin-top: 50px;
  color: white;
  text-align: center;
}

img {
  height: 500px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  display: block;
  margin-top: 40px;
}
</style>
