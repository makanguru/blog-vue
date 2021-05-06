import Vue from 'vue'
import VueRouter from 'vue-router'

import GlobalReb from '@/views/GlobalReb.vue'
import YourReb from '@/views/YourReb.vue'
import DroveReb from '@/views/DroveReb.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import item from '@/views/item.vue'
import Createitem from '@/views/Createitem.vue'
import Edititem from '@/views/Edititem.vue'
import Settings from '@/views/Settings.vue'
import UserProfile from '@/views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'globalReb',
    component: GlobalReb
  },
  {
    path: '/reb',
    name: 'yourReb',
    component: YourReb
  },
  {
    path: '/droves/:slug',
    name: 'drove',
    component: DroveReb
  },
  {
    path: '/items/new',
    name: 'createitem',
    component: Createitem
  },
  {
    path: '/items/:slug',
    name: 'item',
    component: item
  },
  {
    path: '/items/:slug/edit',
    name: 'edititem',
    component: Edititem
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/profiles/:slug/nice',
    name: 'userProfileNice',
    component: UserProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
