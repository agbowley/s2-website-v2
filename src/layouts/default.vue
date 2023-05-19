<template>
    <v-app dark>
        <dialog-component></dialog-component>
        <splash-screen v-if="loading"></splash-screen>
        <div class="app-container background-hellscape">
            <s2-app-bar class="mb-15" />
            <div class="app-shade vertical-fade-bottom">
                <v-main>
                    <nuxt />
                </v-main>
            </div>
            <s2-footer></s2-footer>
        </div>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import S2AppBar from "@/components/s2-app-bar.vue";
import S2Footer from "@/components/s2-footer.vue";
import SplashScreen from "@/components/splash-screen.vue";
import DialogComponent from '@/components/utility/dialog-component.vue';

export default Vue.extend({
    name: "default",
    components: {
        S2AppBar,
        SplashScreen,
        S2Footer,
        DialogComponent
    },
    data() {
        return {
            loading: true,
        };
    },
    mounted() {
        // Simulate loading
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    },
});
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.app-shade {
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.vertical-fade-bottom::before {
    z-index: 0;
}
</style>