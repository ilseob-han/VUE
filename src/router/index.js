
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },

  {
    path: '/bind',
    name: 'bind',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/bat/day2시험점수watch.vue')
  },

  {
    path: '/food',
    name: 'food',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/bat/vue_day1.vue')
  },

  {
    path: '/research',
    name: 'research',

    component: () => import('@/bat/vue-day1음식주문실습.vue')
  },

  {
    path: '/forStudy',
    name: 'forStudy',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue-day4_for문활용.vue')
  },

  {
    path: '/howManyMeals',
    name: 'howManyMeals',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue-day3설문조사.vue')
  },
  {
    path: '/modal',
    name: 'modal',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue_day4_모달창.vue')
  },

  {
    path: '/child',
    name: 'child',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue_day4_childComp.vue')
  },

  {
    path: '/modalIf',
    name: 'modalIf',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue_day4_modalif.vue')
  },

  {
    path: '/axio',
    name: 'axio',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue-day4_axios.vue')
  },



  {
    path: '/nodeTest',
    name: 'nodeTest',

    component: () => import(/* webpackChunkName: "about" */'@/bat/vue-day5_node')
  },

   {
    path: '/tourAPI',
    name: 'tourAPI',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourAPIKeyword.vue')
  },

  {
    path: '/tourAPILoca',
    name: 'tourAPILoca',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourAPILoca.vue')
  },

  {
    path: '/tourAPIFestival',
    name: 'tourAPIFestival',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourAPIFestival.vue')
  },
 
  {
    path: '/tourAPIitem',
    name: 'tourAPIitem',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourAPIitem.vue')
  },
 
  {
    path: '/AreaToDB',
    name: 'AreaToDB',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourRequest.vue')
  },
 
  {
    path: '/AreaToDBAll',
    name: 'AreaToDBAll',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourAPIDownLoadAll.vue')
  },
 
 
  {
    path: '/AskToDB',
    name: 'AskToDB',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TourSample.vue')
  },

  {
    path: '/TravelPlanner',
    name: 'TravelPlanner',

    component: () => import(/* webpackChunkName: "about" */'@/bat/API/TravelPlanner.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
