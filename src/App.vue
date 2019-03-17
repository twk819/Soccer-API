<template>
  <v-app>
    <app-navigator></app-navigator>
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
