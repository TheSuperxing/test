<template>
  <div class="footer">
    <div class="footerNav">
      <dl>
        <dt>关于CCDI</dt>
        <dd><a href="">公司介绍</a></dd>
        <dd><a href="">所获荣誉</a></dd>
        <dd><a href="">成员企业</a></dd>
        <dd><a href="">公司介绍</a></dd>
      </dl>
      <dl>
        <dt>CCDI全媒体</dt>
        <dd><a href="">宣传用品</a></dd>
        <dd><a href="">网络视频</a></dd>
      </dl>
      <dl>
        <dt>联系我们</dt>
        <dd><a href="">总部</a></dd>
        <dd><a href="">区域</a></dd>
        <dd><a href="">分公司与办事处</a></dd>
        <dd><a href="">招聘</a></dd>
      </dl>
      <div style="clear: both"></div>
    </div>
    <div class="copyring">
      <p>Copyringto2014CCDI Allright reserved.沪ICP备16030624号-2 </p>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'footer',
    data () {
    }
  }
</script>
<style scoped>
  *{
    padding:0;
    margin:0;
  }
  .footer{
    height: 250px;
    background: #eee;
    min-width:1528px;
  }
  .footer .footerNav{
    padding-left:362px;
  }
  .footer dl{
    float: left;
    list-style: circle;
    padding-right: 100px;
    text-align: left;
    padding-top:30px;
  }
  .footer dl dt{
    font-size: 20px;
    line-height: 26px;
  }
  .footer dl dd{
    font-size:17px;
    line-height: 30px;
    list-style: circle;
  }
  .footer dl dd a{
    text-decoration: none;
    color: #8a8a8a;
  }
.footer .copyring{
  padding-left:362px;
  text-align: left;
}
</style>

