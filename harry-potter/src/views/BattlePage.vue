<template>
<div class="page-battle">
   <audio id=“audio”  autoplay>
        <source src="http://66.90.93.122/ost/super-mario-bros-2/amokcrqa/03%20-%20Super%20Mario%20Bros%202%20Main%20Theme.mp3"/>
  </audio>
<div class="loader" v-if="room.players.length===1"></div>
  <div class="battle" v-else>
    <div>
      <h3>{{room.players[0].name}}</h3>
      <div class="box1" :style="{width : room.players[0].health+'%'}"></div><button v-if="statusSpell1" @click="spell1">Spell</button>
          <img class="player1" :src="image1" alt="img" v-bind:style="{ marginLeft: position1 + '%' }">
    </div>
    <div>
      <h3>{{room.players[1].name}}</h3>
      <div class="box2" :style="{width : room.players[1].health+'%'}"></div><button v-if="statusSpell2" @click="spell2">Spell</button>
        <img class="player2" :src="image2" alt="" v-bind:style="{ marginLeft: position2 + '%' }">
    </div>
  </div>

</div>

</template>

<script>
import database from '@/assets/config.js'
import swal from 'sweetalert2'

const leftHook =
  'http://soundbible.com/mp3/Left Hook-SoundBible.com-516660386.mp3'
const rightHook =
  'http://soundbible.com/mp3/Right%20Hook-SoundBible.com-1406389182.mp3'

export default {
  data () {
    return {
      heroname1: '',
      heroname2: '',
      position1: 0,
      position2: 20,
      loaded: false,
      statusSpell1: true,
      statusSpell2: true,
      status: localStorage.getItem('player'),
      gambar: '../assets/fleur_delacour_007_by_bluerosegoddess-d4jduvj.png'
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
    },
    image1 () {
      return this.room.players[0].url
    },
    image2 () {
      return this.room.players[1].url
    }
  },
  methods: {
    spell1 () {
      let self = this
      self.position1 += 50
      setTimeout(function () {
        self.position1 -= 50
      }, 100)
      self.position2 += 300
      setTimeout(function () {
        self.position2 -= 300
      }, 500)
      var audio = new Audio(leftHook)
      audio.play()
      self.statusSpell1 = false
      self.statusSpell2 = false
      setTimeout(function () {
        self.statusSpell2 = true
      }, 5000)
      if (self.room.players[1].health > 0) {
        database.ref('/' + self.room.roomName + '/player2').set(
          {
            name: self.room.players[1].name,
            health: self.room.players[1].health - 20
          },
          function (err) {
            if (err) {
              console.log(err)
            }
          }
        )

        var audio = new Audio(leftHook)
        audio.play()
      } else {
        swal({
          title: 'Player 1 win!',
          text: 'Lets play again!',
          icon: 'success',
          button: 'Yeay!'
        }).then(val => {
          if (val) {
            self.$router.push('/')
            localStorage.clear()
          }
        })
      }
    },
    spell2 () {
      let self = this
      self.position2 -= 50
      setTimeout(function () {
        self.position2 += 50
      }, 100)
      self.position1 -= 300
      setTimeout(function () {
        self.position1 += 300
      }, 500)
      var audio = new Audio(leftHook)
      audio.play()
      self.statusSpell2 = false
      self.statusSpell1 = false
      setTimeout(function () {
        self.statusSpell1 = true
      }, 5000)
      if (self.room.players[0].health > 0) {
        database.ref('/' + self.room.roomName + '/player1').set(
          {
            name: self.room.players[0].name,
            health: self.room.players[0].health - 20
          },
          function (err) {
            if (err) {
              console.log(err)
            }
          }
        )

        var audio = new Audio(leftHook)
        audio.play()
      } else {
        swal({
          title: 'Player 2 win!',
          text: 'Lets play again!',
          icon: 'success',
          button: 'Yeay!'
        }).then(val => {
          if (val) {
            self.$router.push('/')
            localStorage.clear()
          }
        })
      }
    }
  },
  mounted () {
    let self = this
    window.addEventListener('keypress', function (e) {
      let player = localStorage.getItem('player')
      // Player 1
      if (player) {
        if (self.room.players[1].health > 0) {
          if (e.keyCode === 32) {
            setTimeout(() => {
              self.position1 += 50
              setTimeout(function () {
                self.position1 -= 50
              }, 100)
            }, 100)

            if (self.room.players[1].health > 0) {
              database.ref('/' + self.room.roomName + '/player2').set(
                {
                  name: self.room.players[1].name,
                  health: self.room.players[1].health - 2,
                  url: self.room.players[1].url
                },
                function (err) {
                  if (err) {
                    console.log(err)
                  }
                }
              )
              var audio = new Audio(rightHook)
              audio.play()
            }
          }
        } else if (self.room.players[1].health <= 0) {
          swal({
            title: 'Player 1 win!',
            text: 'Lets play again!',
            icon: 'success',
            button: 'Yeay!'
          }).then(val => {
            if (val) {
              self.$router.push('/')
              window.addEventListener('keypress')
              localStorage.clear()
            }
          })
        }
      }
      // Player 2
      if (player === undefined || player === null) {
        if (self.room.players[0].health > 0) {
          if (e.keyCode === 32) {
            self.position2 -= 50
            setTimeout(function () {
              self.position2 += 50
            }, 100)

            if (self.room.players[0].health > 0) {
              database.ref('/' + self.room.roomName + '/player1').set(
                {
                  name: self.room.players[0].name,
                  health: self.room.players[0].health - 2,
                  url: self.room.players[0].url
                },
                function (err) {
                  if (err) {
                    console.log(err)
                  }
                }
              )
              var audio = new Audio(rightHook)
              audio.play()
            }
          }
        } else if (self.room.players[1].health <= 0) {
          swal({
            title: 'You Lose!',
            text: 'Lets play again!',
            icon: 'warning',
            button: 'Yeay!'
          }).then(val => {
            if (val) {
              localStorage.clear()
              self.$router.push('/')
            }
          })
        } else {
          swal({
            title: 'Player 2 win!',
            text: 'Lets play again!',
            icon: 'success',
            button: 'Yeay!'
          }).then(val => {
            if (val) {
              self.$router.push('/')
              window.addEventListener('keypress')
              localStorage.clear()
            }
          })
        }
      }
    })
  }
}
</script>

<style scoped>
.player1 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  z-index: 998;
}

.player2 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  z-index: 900;
}
@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 5px;
  }
}
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
