import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import unit from '@/components/unit'
import index from '@/components/index'
import qualifications from '@/components/qualifications'
import addunit from '@/components/units/addunit'
import matter from '@/components/matter'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      template:"<index>"
    },
    {
      path: '/unit',
      name: 'unit',
      component: unit,
      template:"<unit>"
    },
    {
      path: '/qualifications',
      name: 'qualifications',
      component: qualifications,
      template:"<qualifications>"
    }
    ,
    {
      path: '/unit/addunit',
      component: addunit,
    },
    {
      path: '/matter',
      component: matter,
    }
  ]
})
