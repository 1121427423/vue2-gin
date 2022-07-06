<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    <el-button @click="test">test-store</el-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    test() {
      console.log(this.$store.getters["user/userInfo"])
      this.$store.dispatch("user/changeNickName")
      console.log(this.$store.getters["user/count"])
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
