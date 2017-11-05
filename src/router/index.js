import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/index.vue"
import DiscoveryRequirements from "../components/fxxq.vue"
import PublishingRequirements from "../components/fbxq.vue"
import Business from "../components/wdjy.vue"
import Company from "../components/company/company.vue"
import companyIndex from "../components/company/companyIndex.vue"
import companyAccount from "../components/company/companyAccount.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/fxxq',
      name:"DiscoveryRequirements",
      component:DiscoveryRequirements
    },
    {
      path:'/fbxq',
      name:"PublishingRequirements",
      component:PublishingRequirements
    },
    {
      path:'/wdjy',
      name:"Business",
      component:Business
    },
    /*{
      path:'/',
      name:"Company",
      component:Company
    },*/{
    path:"/",
      redirect:"/company/companyIndex",
    },{
    path:"/company/companyIndex",
      component:Company,
      children:[
        {path:"/company/companyIndex",component:companyIndex},
        {path:"/company/companyAccount",component:companyAccount},
      ]
    }
    /*{
      path:"/",
      redirect:'/app'
    },{
      path:'/app',
      component:Company,
      children:[
        {path:"/app/fxxq",component:DiscoveryRequirements},
        {path:"/app/fbxq",component:PublishingRequirements},
        {path:"/app/wdjy",component:Business},
        {path:"/app/company",component:Company},
      ]
    }*/

  ]
})
