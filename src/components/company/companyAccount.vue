<template>
  <div class="companyAccount">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    name:"companyAccount",
    data(){
      return {
        msg:"公司账号信息"
      }
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding:0;
  }
  .companyAccount{
    width:832px;
    height:695px;
    background: #cccccc;
    float: left;
    margin-bottom: 22px;
  }
</style>
