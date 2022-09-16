import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterUserView from "@/views/RegisterUserView";
import StartBudgetView from "@/views/StartBudgetView";
import AddSubcategory from "@/components/user/AddSubcategory";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterUserView
  },
  {
    path: '/start/budget',
    name: 'startBudgetRoute',
    component: StartBudgetView
  },
  {
    path: '/setup/subcategory/add',
    name: 'addSubcategoryRoute',
    component: AddSubcategory
  },

]

const router = new VueRouter({
  routes
})

export default router
