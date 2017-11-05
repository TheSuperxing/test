import Vue from 'vue'
import Router from 'vue-router'
import companyIndex from "../components/company/companyIndex.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/company",
    },{
      path:"/company",
      component:Company,
      children:[
        {path:"/company/companyIndex",component:companyIndex}
      ]
    }

  ]
})
