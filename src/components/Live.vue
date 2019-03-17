
<template>
    <v-container fluid fill-height>
        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.idEvent"
              no-action
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.strEvent }}</v-list-tile-title>
                    <v-list-tile-sub-title v-if="" >Notify when receiving invites</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <v-list-tile

              >
                <v-list-tile-content>
                  <v-list-tile-title>{{  }}</v-list-tile-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-icon>{{  }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>

            </v-list-group>
          </v-list>
    </v-container>
</template>

<script>

let res = [];
let score = [];
let apiURL = 'https://www.thesportsdb.com/api/v1/json/1/';
const apiKey = '&appid=81cccfad5f894f739e8cad2c31d31dab';
    
export default {
    name: 'Weather',
    data() {
        return {
            items: res,
            matchs: score

        }
    },
    created: function() {
        this.getLive();
    },
    methods: {
        fetchData: function(api) {
             fetch(api)
                .then(response => response.json())
                .then(data => {

                    for (let key in data.events) {
                        // this.matchID = key.idEvent;
                        // this.homeID = key.idHomeTeam;
                        // this.awayID = key.idAwayTeam;
                        // this.matchName
                        
                    }
                    
                })
                .catch(err => console.log(err))
        },
        getLive: function() {
            var _this = this;
            
            let eventApi = apiURL + 'eventsnextleague.php?id=4328'; 
            let league = '';
            //_this.fetchData(param);
            fetch(eventApi)
                .then(response => response.json())
                .then(data => {
                    for (let key in data.events) {
                        res.push(data.events[key]);
                    }
                    this.items = res;
                    league = data.events[0].strLeague;
                    console.log(this.items);
                })
                .catch(err => console.log(err))

            let matchApi = apiURL + 'latestsoccer.php'; 

            //_this.fetchData(param);
            fetch(matchApi)
                .then(response => response.json())
                .then(data => {
                    for (let key in data.teams.Match) {
                        if(league == data.teams.Match[key].League) {
                            //this.items.data.teams.Match[key]);
                            console.log(data.teams.Match[key].HomeTeam);
                        }
                            
                    }
                    //this.matchs = score;
                    //console.log(this.matchs);
                })
                .catch(err => console.log(err))

        }
    }
}
</script>

<style scoped>

</style>
