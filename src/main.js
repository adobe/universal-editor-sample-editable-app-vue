import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import AdventureDetailView from './views/AdventureDetailView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/adventure/:slug',
    component: AdventureDetailView,
    name: 'adventure-detail'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
