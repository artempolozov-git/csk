<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
  export default {
    components: {

    },
    computed: {
      defaultViewKey: function() {
        return this.$route.name;
      }
    }
  }
</script>
<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
  }
  @font-face {
    font-family: Roboto;
    src: url('./assets/Roboto-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: Roboto;
    src: url('./assets/Roboto-normal.ttf');
    font-weight: normal;
  }
  body {
    font-family: Roboto;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #app-content {
    flex: 1 0 auto;
    margin-top: 110px;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>