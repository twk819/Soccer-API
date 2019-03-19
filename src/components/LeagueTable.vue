<template>
    <v-app id="inspire">
        <v-card class="pa-3">
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            hide-actions
            disable-initial-sort
        >
            <template v-slot:items="props">
            <router-link  v-bind:to="'/club/' + props.item.name"><td>{{ props.item.name }}</td></router-link>
            <td class="text-xs-left">{{ props.item.played }}</td>
            <td class="text-xs-left">{{ props.item.win }}</td>
            <td class="text-xs-left">{{ props.item.draw }}</td>
            <td class="text-xs-left">{{ props.item.loss }}</td>
            <td class="text-xs-left">{{ props.item.goalsfor }}</td>
            <td class="text-xs-left">{{ props.item.goalsagainst }}</td>
            <td class="text-xs-left">{{ props.item.goalsdifference }}</td>
            <td class="text-xs-left">{{ props.item.total }}</td>
            </template>
            <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table>
        </v-card>
    </v-app>
</template>

<script>

let apiURL = 'https://www.thesportsdb.com/api/v1/json/1/';
let res = [];
export default {
    name: 'LeagueTable',
    data() {
        return {
            search: '',
            headers: [
                {
                text: 'Club',
                align: 'left',
                sortable: false,
                value: 'name'
                },
                { text: 'MP', value: 'played', width: "1%"},
                { text: 'W', value: 'win', width: "1%" },
                { text: 'D', value: 'draw', width: "1%" },
                { text: 'L', value: 'loss', width: "1%" },
                { text: 'GF', value: 'goalsfor', width: "1%" },
                { text: 'GA', value: 'goalsagainst', width: "1%" },
                { text: 'GD', value: 'goalsdifference', width: "1%" },
                { text: 'Pts', value: 'total', width: "1%" },
                { align: 'left', sortable: false,text: '', value: 'name' }
            ],
            items: res,
        }
    },
    created: function() {
        this.fetchData();
	},
    methods: {
        fetchData: function() {
            let api = apiURL + 'lookuptable.php?l=4328&s=1819';
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    res = [];
                    console.log(data.table);
                    for (let key in data.table) {
                        res.push(data.table[key]);
                    }
                    console.log(res);
                })
                .catch(err => console.log(err))
        },
    }
}
</script>

<style>
table.v-table thead td:not(:nth-child(1)), table.v-table tbody td:not(:nth-child(1)), table.v-table thead th:not(:nth-child(1)), table.v-table tbody th:not(:nth-child(1)), table.v-table thead td:first-child, table.v-table tbody td:first-child, table.v-table thead th:first-child, table.v-table tbody th:first-child {
    padding: 0 1px;
}

/* th:first-child, td:first-child {
    padding: 0 8px;
} */
</style>
