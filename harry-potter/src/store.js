import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import database from './assets/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [],
    spells: [],
    rooms: [],
    statusPlayer: true
  },
  mutations: {
    getHero (state, data) {
      let arr = data.splice(0, 10)

      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          arr[i]['url'] = '../assets/sirius.png'
        } else if (i === 1) {
          arr[i]['url'] = `../assets/Ameliabones copy.png`
        } else if (i === 2) {
          arr[i]['url'] = '../assets/fleur_delacour_007_by_bluerosegoddess-d4jduvj.png'
        } else if (i === 3) {
          arr[i]['url'] = '../assets/dedalus.jpg'
        } else if (i === 4) {
          arr[i]['url'] = '../assets/elphias.png'
        } else if (i === 5) {
          arr[i]['url'] = '../assets/albert.png'
        } else if (i === 6) {
          arr[i]['url'] = '../assets/albus.png'
        } else if (i === 7) {
          arr[i]['url'] = '../assets/Figg.png'
        } else if (i === 8) {
          arr[i]['url'] = '../assets/Mundungus copy.png'
        } else if (i === 9) {
          arr[i]['url'] = '../assets/Hermione.jpg'
        }
      }

      arr.push({ name: 'Helmi Potter', house: 'Hacktiv8', role: 'King of Wizzard', url: '../assets/helmypotter.png' })
      arr.push({ name: 'Ismail Dumbledore', house: 'Hacktiv8', role: 'Arabian Wizzard', url: '../assets/ismavil.png' })

      state.heroes = arr
      console.log(arr)
    },
    getSpell (state, data) {
      state.spells = data.splice(0, 10)
    },
    setRooms (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    fetchHero (context) {
      axios({
        method: 'GET',
        url: `https://www.potterapi.com/v1/characters/?key=$2a$10$xteVTxc8b6noNHXykDSZI.Fw55fMF.EevVd.JbIZoEapcvhrrRTca&&orderOfThePhoenix=true
      `
      })
        .then(response => {
          console.log(response)
          const arr = response.data
          context.commit('getHero', arr)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSpell (context) {
      axios({
        method: 'GET',
        url: `https://www.potterapi.com/v1/spells/?key=$2a$10$xteVTxc8b6noNHXykDSZI.Fw55fMF.EevVd.JbIZoEapcvhrrRTca
      `
      })
        .then(response => {
          console.log(response)
          context.commit('getSpell', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRooms (context) {
      let rooms = []
      database.ref('/').on('value', snapshot => {
        rooms = []
        for (let room in snapshot.val()) {
          let obj = {
            roomName: '',
            players: []
          }

          obj.roomName = room
          obj.players.push(snapshot.val()[room].player1)
          if (snapshot.val()[room].player2 !== undefined) {
            obj.players.push(snapshot.val()[room].player2)
          }
          rooms.push(obj)
        }
        context.commit('setRooms', rooms)
      })
    }
  }
})
