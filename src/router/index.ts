import Vue from 'vue'
import VueRouter from 'vue-router'
import Magic8BallPage from '@/views/magic8ballpage.vue'
import viewOptions from '@/views/viewOptions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Magic8BallPage
  },
  {
    path: '/edit',
    name: 'edit',
    component: viewOptions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
