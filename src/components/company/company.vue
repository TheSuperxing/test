<template>
  <div class="company">
    <router-view></router-view>
    <company-slider></company-slider>
    <div style="clear: both"></div>
  </div>
</template>

<script>
  import CompanySlider from "./companySlider.vue"
  export default {
    name: 'company',
    data () {
      return {
        msg:"公司主页"
      }
    },
    components:{
      CompanySlider
    }
  }
</script>
<style>
.company{
  width:1166px;
  margin-left:362px;
}
</style>
