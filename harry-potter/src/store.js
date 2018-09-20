import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
          context.commit('getHero', response.data)
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
    }
  }
})
