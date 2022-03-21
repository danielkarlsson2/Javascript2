import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import LoginView from '../views/LoginView.vue'
import MyProfile from '../views/MyProfile.vue'
import store from '../store/index'

const requireAuth = (to, from , next) => {
    let loggedIn = store.getters.loggedIn
    if(!loggedIn) next({ name: 'login' , query: { redirect: to.fullPath}})
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myprofile',
    name: 'myProfile',
    component: MyProfile,
    // meta: { authorize: true }
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/details/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   let loggedIn = store.getters.loggedIn

//   const { authorize } = to.meta

//   if(authorize) {
//     if(!loggedIn) next({ name: 'login' , query: { redirect: to.fullPath}})
//     else next()
//   }
//   else{

//     next()
//   }


// })



export default router
