<template>
    <div class="club">
        <Club />
    </div>
</template>

<script>
import ClubDetails from "@/components/ClubDetails"
export default {
    name: 'Club',
    data() {
        return {
            id: this.$route.params.id,
            temp: []
        }
    },
    created() {
        //133612
        //this.id = 'Arsenal';
        console.log('id is '+this.id);
        this.fetchData();
            
    },
    components: {
        ClubDetails
    },
    methods: {
        fetchData: function() {
            let api = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='+this.id;
            console.log("club fetch data "+api);
            //_this.fetchData(param);
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data.teams);
                    //temp.push(data.teams);
                })
                .catch(err => console.log(err))
        }
    }

}
</script>

<style scoped>

</style>
