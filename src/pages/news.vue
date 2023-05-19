<template>
    <v-container>
        <v-container class="news-container">
            <v-row>
                <v-col cols="12" v-for="item in newsItems" :key="item.id">
                    <v-card dark
                        :elevation="12" 
                        class="news-item">
                        <v-card-title>{{ item.title }}</v-card-title>
                        <v-card-subtitle>{{ item.date }} by {{ item.author }}</v-card-subtitle>
                        <v-card-text>{{ item.text }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <news-banner></news-banner>
    </v-container>
</template>
  
<script lang="ts">
import Vue from "vue";
import NewsBanner from "@/components/news/news-banner.vue";

export class NewsItem {
    id: number | undefined;
    date: Date | undefined;
    title: string | undefined;
    author: string | undefined;
    text: string | undefined;
}

export default Vue.extend({
    name: 'news',
    components: {
        NewsBanner
    },
    data() {
        return {
            newsItems: [
                { id: 1, date: new Date(), title: 'News 1', author: 'Author 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { id: 2, date: new Date(), title: 'News 2', author: 'Author 2', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { id: 3, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 4, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 5, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 6, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 7, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 8, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 9, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 10, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 11, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 12, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 13, date: new Date(), title: 'News 3', author: 'Author 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                // Add more news items as needed
            ] as NewsItem[],
        };
    },
});
</script>

<style lang="scss">
.news-container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

@media (max-width: 600px) {
    .news-container {
        max-width: 100%;
    }
}
</style>
  