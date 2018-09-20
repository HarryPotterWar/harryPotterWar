import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import database from './assets/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [],
    spells: []
  },
  mutations: {
    getHero (state, data) {
      state.heroes = data
    },
    getSpell (state, data) {
      state.spells = data.splice(0, 10)
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
          arr.push({ name: 'Helmi Potter', house: 'Hacktiv8', role: 'King of Wizzard' })
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
    rooms: []
  },
  mutations: {
    setRooms (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    getRooms (context) {
      let rooms = []

      database.ref('/').on('value', (snapshot) => {      
        for (let room in snapshot.val()) {
          let obj = {
            roomName: '',
            players: []
          }
          
          obj.roomName = room
          obj.players.push(snapshot.val()[room])
          
          rooms.push(obj)
        }
        
        context.commit('setRooms', rooms)
      })
    }
  }
})
