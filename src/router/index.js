import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Listado de Productos',
    component: () => import('../views/ListaProductos.vue')
  },
  {
    path: '/modificar',
    name: 'Modificar Productos',
    component: () => import('../views/ModificarProductos.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar Productos',
    component: () => import('../views/AgregarProductos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router