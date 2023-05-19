<template>
    <v-img :src="selectedBackground" class="dim-image" rel="preload" preload="metadata">
        <slot />
    </v-img>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "s2-random-background",
    data() {
        return {
            backgrounds: ["img/backgrounds/1.png", "img/backgrounds/2.png", "img/backgrounds/3.png",
                "img/backgrounds/4.png", "img/backgrounds/5.png", "img/backgrounds/6.png"] as string[],
            selectedBackgroundIndex: 0
        }
    },
    computed: {
        selectedBackground(): string {
            return this.backgrounds[this.selectedBackgroundIndex];
        }
    },
    mounted() {
        this.selectedBackgroundIndex = Math.floor(Math.random() * this.backgrounds.length);
    }
});
</script>

<style scoped>
.dim-image {
    object-fit: fill;
    position: fixed;
    top: 0;
    left: 0;
}
</style>