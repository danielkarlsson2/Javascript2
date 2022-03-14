import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import PostDetails from '../views/PostDetails.vue'
import SearchResults from '../views/SearchResults.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: PostDetails,
    props: true
  },
  {
    path: '/search',
    name: 'serach',
    component: SearchResults,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
