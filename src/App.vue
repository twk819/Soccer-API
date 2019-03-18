<template>
  <v-app>
    <app-navigator />
    <router-view />
  </v-app>
</template>

<script>
import AppNavigator from './components/AppNavigator'

export default {
  name: 'App',
  components: {
    AppNavigator
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  overflow-x: hidden;
  background: #eeeeee;
}
body {
  display: flex;
  overflow-x: hidden;
  width: 75vh;
  margin: 0 auto;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  width: 100%;
  height: 100%;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
</style>

