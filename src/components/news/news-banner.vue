<template>
    <v-container class="news-banner-container">
        <v-row class="ma-0" justify="space-between" align="center">
            <span class="section-heading">Site news</span>
            <divider></divider>
            <router-link to="/news">
                <b class="section-heading white--text">View all</b>
            </router-link>
        </v-row>
        <v-carousel height="200px" :touch="{ swipe: true }" hide-delimiters :continuous="false">
            <v-carousel-item v-for="(group, index) in groupedItems" :key="index">
                <v-row style="height: 100%;">
                    <v-col :cols="4" v-for="(item, index) in group" :key="index">
                        <news-item :newsItem="item"></news-item>
                    </v-col>
                    <v-col v-if="group.length < rowSize" :cols="(4 * (rowSize - group.length))">
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import NewsItem from "@/components/news/news-item.vue";

const backgrounds = ["img/backgrounds/1.png", "img/backgrounds/2.png", "img/backgrounds/3.png",
    "img/backgrounds/4.png", "img/backgrounds/5.png", "img/backgrounds/6.png"];
const selectedBackground = () => {
    return backgrounds[Math.floor(Math.random() * 6)];
}

const newsItems = [
    {
        title: 'Breaking News: Global Warming Alert',
        description: 'A new study reveals alarming trends in global warming.',
        logo: selectedBackground(),
    },
    {
        title: 'Technology: New Smartphone Released',
        description: 'The latest smartphone model has been unveiled today.',
        logo: selectedBackground(),
    },
    {
        title: 'Sports: Football Championship Results',
        description: 'Find out the results of the thrilling football championship match.',
        logo: selectedBackground(),
    },
    {
        title: 'Health: Tips for a Healthy Lifestyle',
        description: 'Learn more about maintaining a healthy and balanced lifestyle.',
        logo: selectedBackground(),
    },
    {
        title: 'Entertainment: Upcoming Movie Premieres',
        description: 'Get the latest news on movie premieres and release dates.',
        logo: selectedBackground(),
    },
    {
        title: 'Politics: Election Updates',
        description: 'Stay informed on the latest political news and election updates.',
        logo: selectedBackground(),
    },
    {
        title: 'Finance: Stock Market Analysis',
        description: 'Explore in-depth stock market analysis and financial insights.',
        logo: selectedBackground(),
    },
    {
        title: 'Travel: Top Destinations for 2023',
        description: 'Discover the must-visit travel destinations for this year.',
        logo: selectedBackground(),
    },
];

export default Vue.extend({
    name: "news-banner",
    components: {
        NewsItem
    },
    computed: {
        rowSize() {
            // let rowSize = 3;
            // if (this.$vuetify.breakpoint.smAndDown) {
            //     rowSize = 2;
            // } 
            // else if (this.$vuetify.breakpoint.md) {
            //     rowSize = 3;
            // }

            // return rowSize;
            return this.$vuetify.breakpoint.smAndDown ? 3 : 3;
        },
        groupedItems() {
            let grouped = [];
            for (let i = 0; i < newsItems.length; i += this.rowSize) {
                const group = newsItems.slice(i, i + this.rowSize);
                grouped.push(group);
            }
            return grouped;
        },
    },
    props: {
        items: {
            type: Array,
            required: false,
        },
    },
});
</script>

<style lang="scss">
.news-banner-container {
    max-width: 1000px;
}
</style>