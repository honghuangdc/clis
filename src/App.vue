<template>
  <div id="app">
    <h1>This is my Projects!!!</h1>
    <div class="router">
      <h2>路由</h2>
      <ul>
        <li><router-link to="/">home page</router-link></li>
        <li><router-link to="/first-page">first page(也是home page)</router-link></li>
        <li><router-link to="/second-page">second page</router-link></li>
      </ul>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("./styles/mvp.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
