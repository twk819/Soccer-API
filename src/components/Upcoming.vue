
<template>
    <v-container fluid fill-height>
        <v-list fluid>
            <v-list-group
              v-for="(item, index) in items"
              :key="item.idEvent"
              no-action
            >
				<template v-slot:activator>
					<v-list-tile>
						<v-list-tile-content>
						<v-list-tile-title>
							<v-layout row wrap >
							<v-flex xs5 text-xs-left>
								{{ item.strHomeTeam }}
							</v-flex>
							<v-flex xs2 text-xs-center>
								-
							</v-flex>
							<v-flex xs5 text-xs-right>
								{{ item.strAwayTeam }}
							</v-flex>
							</v-layout>

						</v-list-tile-title>
						<v-list-tile-sub-title >Notify when receiving invites</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
				</template>

              <v-list-tile

              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ getRecentForm(item.idHomeTeam, index, 'H') }}</v-list-tile-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-icon>{{ getRecentForm(item.idHomeTeam, index, 'A') }}</v-icon>
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
        this.getUpcoming();
	},
	computed: {

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
        getUpcoming: function() {
            var _this = this;
            
            let eventApi = apiURL + 'eventsnextleague.php?id=4328'; 
            let league = '';
            //_this.fetchData(param);
            fetch(eventApi)
                .then(response => response.json())
                .then(data => {
                    for (let key in data.events) {
						if(key < 6)
                        	res.push(data.events[key]);
                    }
                    this.items = res;
                    league = data.events[0].strLeague;
                    //console.log(this.items);
                })
                .catch(err => console.log(err))
		},
		getRecentForm: function(id, index, ind) {
			// Get Last 5 event result of a team
			let matchApi = apiURL + 'eventslast.php?id=' + id; 
			let result;
            //_this.fetchData(param);
            fetch(matchApi)
                .then(response => response.json())
                .then(data => {
					let score = '';
					for (var i in data.results) {
						if (data.results[i].intHomeScore == data.results[i].intAwayScore)
							score += 'D';
						else
							score += data.results[i].intHomeScore;
						console.log(data.results[i].intHomeScore);
						
					}
					result += score;
					this.items[i].homeScore = result;
					console.log("home: "+this.items[index].homeScore)
					return result;
                })
				.catch(err => console.log(err))
			
			return this.items[index].homeScorer
		},
    }
}
</script>

<style scoped>

</style>
