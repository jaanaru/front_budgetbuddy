import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterUserView from "@/views/RegisterUserView";
import StartBudgetView from "@/views/StartBudgetView";
import AddSubcategory from "@/components/user/AddSubcategory";
import TransactionsView from "@/views/TransactionsView";
import BudgetView from "@/views/BudgetView";
import AccountView from "@/views/AccountView";


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
  {
    path:'/transactions',
    name:'accountsTransactionsRoute',
    component: TransactionsView
  },
  {
    path: '/budget',
    name: 'myMonthlyBudget',
    component: BudgetView
  },
  {
    path: '/account',
    name: 'accountRoute',
    component: AccountView
  }
]

const router = new VueRouter({
  routes
})

export default router
