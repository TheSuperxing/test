<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from "./components/footer.vue";
  import HeaderNav from "./components/header.vue";
export default {
  name: 'app',
  components:{
    HeaderNav,
    FooterNav
  }
}

</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  html,body{
    min-width:1166px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}
</style>
