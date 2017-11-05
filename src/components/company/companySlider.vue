<template>
  <div class="companySlider">
      <ul class="companySliderNavList">
        <li><router-link to="/company/companyIndex">1</router-link></li>
        <li><router-link to="/company/companyAccount">2</router-link></li>
        <li><router-link to="/">3</router-link></li>
        <li><router-link to="/">4</router-link></li>
        <li><router-link to="/">5</router-link></li>
      </ul>
    <p style="clear: both"></p>
  </div>

</template>
<script>

</script>
<style>
  .companySlider{
    float: left;
    margin-left:44px;
  }
 .companySliderNavList{
   width: 290px;
   height:450px;
   background: #CCCCCC;
 }
 .companySliderNavList li{
   list-style: none;
 }
</style>
