<template>
    <v-container>
        <!-- <v-btn text to="/news" class="mx-1">News</v-btn>
        <v-btn text to="/leaderboards" class="mx-1">Leaderboards</v-btn>
        <v-btn text to="/forums" class="mx-1">Forums</v-btn>
        <v-btn text to="/support" class="mx-1">Support</v-btn> -->
        <v-layout :column="direction === 'vertical'" wrap align-start>
            <div :class="direction === 'vertical' ? ['vertical', 'd-flex'] : 'horizontal'" v-for="(link, index) in links" :key="index">
                <v-btn text :to="link.to" :style="getWidth">{{ link.name }}</v-btn>
            </div>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "links",
    props: {
        direction: {
            type: String,
            default: "horizontal"
        }
    },
    data() {
        return {
            links: [
                { name: "News", to: "/news" },
                { name: "Leaderboards", to: "/leaderboard" },
                { name: "Matches", to: "/replays" },
                { name: "Clans", to: "/clans" },
                { name: "Forums", to: "/forum" },
                { name: "Support", to: "/support" }
            ]
        };
    },
    computed: {
        getWidth() {
            return this.direction === "vertical" ? { width: "100%" } : {};
        },
    },
});
</script>

<style scoped>
.vertical, .vertical>.v-btn {
    width: 100%;
    justify-content: start;
}

.horizontal {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>