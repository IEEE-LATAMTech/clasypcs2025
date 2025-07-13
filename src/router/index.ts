import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/views/AboutUs.vue'


export  const routes =[
    { path: '/about' , name:'AboutUs', component:AboutUs}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router