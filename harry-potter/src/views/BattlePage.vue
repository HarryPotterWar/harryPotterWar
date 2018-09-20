<template>
<div class="page-battle">
<div class="loader" v-if="room.players.length===1"></div>
  <div class="battle" v-else>
    <div>
      <h3>{{heroname1}}</h3>
      <div class="box1" :style="{width : room.players[0].health+'%'}"></div>
      <img src="../../public/helmypotter.png" alt="">
    </div>
    <div>
      <h3>{{heroname2}}</h3>
      <div class="box2" :style="{width : room.players[1].health+'%'}"></div>
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
      heroname2: 'Harry Potter',
      loaded: false
    }
  },
  props: ['id'],
  computed: {
    room () {
      let room = []
      for (let i = 0; i < this.$store.state.rooms.length; i++) {
        if (this.$store.state.rooms[i].roomName === this.id) {
          room = this.$store.state.rooms[i]
        }
      }
      return room
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

.box1 {
  margin-top: 20px;
  /* width: 100%; */
  height: 50px;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.box2 {
  margin-top: 20px;
  /* width: 100%; */
  height: 50px;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
  text-align: right;
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
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
