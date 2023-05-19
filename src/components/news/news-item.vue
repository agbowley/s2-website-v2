<template>
    <v-card 
        dark 
        height="100%"
        class="news-item card-border" 
        :elevation="12" 
        :style="{ backgroundImage: 'url(' + newsItem.logo + ')' }"
    >
        <div class="image-container">
            <div class="overlay">
                <div class="overlay-content">
                    <h4>{{ newsItem.title }}</h4>
                    <p class="description">{{ newsItem.description }}</p>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export class NewsItem {
    title: string | undefined;
    description: string | undefined;
    logo: string | undefined;
}

export default Vue.extend({
    name: "news-item",
    props: {
        newsItem: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped>
.card-border {
    border-radius: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}

.image-container {
    position: relative;
    height: 100%;
}

.image-container .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
}

.image-container .overlay .overlay-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    transition: height 0.5s ease-in-out;
}

.image-container .overlay-content {
    background-color: rgba(0, 0, 0, 0.7);
}
.image-container:hover .overlay .overlay-content {
    height: 100%;
}

.image-container .overlay h4,
.image-container .overlay .description {
    color: white;
    padding: 10px;
}

.image-container .overlay .description {
    overflow: hidden;
}

.image-container:hover .overlay .description {
    max-height: 100%;
}

</style>
