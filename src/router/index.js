
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import ReviewList from '../components/reviewlist.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/reviews', component: ReviewList }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
