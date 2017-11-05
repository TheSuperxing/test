<template>
  <div class="hello">
    <div class="top">
      <h1>{{ top }}</h1>
      <ul class="topRight">
        <li v-for="item in topLeft" v-bind:class="{active:item.isActive}">
          <p><span>{{item.span}}</span></p>
          <img v-bind:src="item.img1" alt="">
        </li>
      </ul>
    </div>
    <div class="nav">
      <ul class="navlist">
        <li v-for="item in nav" v-on:click="changeColor(item)" v-bind:class="{'active':item.active}"><router-link v-bind:to="item.rout">{{item.text}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: 'hello',
    data () {
      return {
        top: 'CCDI 悉地国际',
        active:false,
        topLeft:[
          {span:"设置",img:"../../static/img/top/shezhi1.png",img1:"../../static/img/top/shezhi2.png",isActive:true},
          {span:"通知",img:"../../static/img/top/xiaoxi-1.png",img1:"../../static/img/top/xiaoxi2.png",isActive:false}

        ],
        nav:[
          {text:"首页",rout:"/index"},
          {text:"发现需求",rout:"/fxxq"},
          {text:"发布需求",rout:"/fbxq"},
          {text:"我的交易",rout:"/wdjy"},
          {text:"公司主页",rout:"/"}
        ],
        isAction:false
      }
    },
    methods:{
      changeColor:function (item) {
        this.$nextTick(function(){
          this.nav.forEach(function (item) {
            Vue.set(item,"active",false);
          })
          Vue.set(item,"active",true)
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  html,body{
    width:100%;
  }
  .hello{
    width:100%;
    height: 124px;
    margin-bottom: 22px;
    min-width: 1528px;
  }
  .hello .top{
    height: 44px;
    background: #323333;
    color: #e1e1e1;
  }
  .hello .top h1{
    font-size: 17px;
    float: left;
    padding-left:48px;
    line-height: 44px;
  }
  .hello h1{
    margin: 0;
  }

  .hello .top .topRight li{
    float: right;
    list-style: none;
    height:44px;
    line-height: 44px;
  }
  .hello .top .topRight li p{
    float: left;
    font-size: 18px;
    font-color: #e1e1e1;
  }
  .hello .top .topRight li p span{
    padding:0 10px 0  0;
  }
  .hello .top .topRight .active p span{
    padding-left:20px;
    border-left: 1px solid #8a8a8a;
  }
  .hello .top .topRight li img{
    float: left;
    margin:6px 20px 0 0;

  }
  .hello .top .topRight .active img{
    margin-right: 40px;
  }
/*以上是top */

  .hello .nav{
    height: 80px;
    background: #fbfbfb;
    color: #8a8a8a;
    border-bottom: 1px solid #efefef;
  }
  .hello .nav .navlist{
    width:832px;
    height: 100%;
    list-style: none;
    margin-left: 362px;
    border-left:160px solid red;
    padding-left:12px;
  }
  .hello .nav .navlist li{
    height: 100%;
    float: left;
    margin-right:40px;
    font-size: 18px;
    vertical-align: middle;
  }
  .hello .nav .navlist li a{
    color: #8a8a8a;
    text-decoration: none;
    display: inline-block;
    height: 40px;
    width: 102px;
    line-height: 40px;
    text-align: center;
    margin-top:20px;
  }
  /*nav 动态切换 */
  .hello .nav .navlist .active a{
    color: red;
  }
  .hello .nav .navlist .active{
    border-bottom:1px solid red;
  }
</style>
