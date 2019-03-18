<template>
  <div class="about">
    <v-flex xs12 sm4>
      <v-card class="elevation-0 transparent">
        <v-card-title primary-title class="layout justify-center">
          <div class="headline">Company info</div>
        </v-card-title>
        <v-card-text>
          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
        </v-card-text>
      </v-card>
    </v-flex>
    <league-table></league-table>
  </div>
</template>

<script>
import LeagueTable from '@/components/LeagueTable.vue';
export default {
    components: {
        LeagueTable
    }  
}
</script>

<style scoped>

</style>

