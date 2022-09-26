// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Gerentes from '../views/Gerentes.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
//   {
//     path: '/gerentes',
//     name: 'gerentes',
//     component: { 'gerente-view': Gerentes }
//   },
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue'
import VueRouter from 'vue-router';
import Gerentes from '../views/Gerentes.vue';
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue';
import Login from '../views/Login.vue';
import provider from '../store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes,
  },
  {
    path: '/cadastro',
    name: 'novo.usuario',
    component: NovoUsuario,
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      public: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.public && !provider.state.token) {
    return next({ path: 'login' })
  }
  next();
})


export default router
