import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question1',
    name: 'Question1',
    component: () => import(/* webpackChunkName: "about" */ '../views/question1.vue')
  },
  {
    path: '/question2',
    name: 'Question2',
    component: () => import(/* webpackChunkName: "about" */ '../views/question2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
