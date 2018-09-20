import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateRoom from './views/CreateRoom.vue'
import BattlePage from './views/BattlePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: CreateRoom
    },
    {
      path: '/battle/:id',
      name: 'battle',
      props: true,
      component: BattlePage
    }
  ]
})
