<template>
    <v-app-bar app dark>
        <logo class="mx-1"></logo>
        <links v-show="$vuetify.breakpoint.smAndDown ? false : true" class="mx-1"></links>
        <v-spacer />
        <v-btn v-show="$vuetify.breakpoint.smAndDown ? false : true" to="/login" class="mx-1">Sign in</v-btn>
        <v-btn v-show="$vuetify.breakpoint.smAndDown ? false : true" to="/register" class="mx-1 primary"
            nuxt>Play free</v-btn>
        <nav-menu :visible.sync="showMenu"></nav-menu>
        <nav-bar v-show="$vuetify.breakpoint.smAndDown ? true : false" @toggle="toggleMenu"></nav-bar>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "@/components/logo.vue";
import Links from "@/components/links.vue";
import NavMenu from '@/components/nav/nav-menu.vue';
import NavBar from '@/components/nav/nav-bar.vue';

export default Vue.extend({
    name: "s2-app-bar",
    components: {
        Logo,
        Links,
        NavMenu,
        NavBar
    },
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
});
</script>

<style scoped>
.pointer {
    cursor: pointer;
}

.theme--dark.v-sheet,
.theme--dark.v-application,
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #0c0c0c;
}
</style>