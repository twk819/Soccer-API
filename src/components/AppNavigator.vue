<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2 hidden-md-and-up" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/about">Standing</v-btn>
                <v-btn flat to="/club">Clubs</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </span>
</template>

<script>

export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'TITLE HERE',
            drawer: false,
            items: [
                { title: 'About Us' },
                { title: 'Our Services' },
                { title: 'Why Invest Now?' },
                { title: 'Contact Us' }
            ]
        };
    },
    computed: {

    },
    methods: {

    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
