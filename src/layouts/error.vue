<template>
    <v-theme-provider dark>
        <!-- <s2-random-background> -->
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex xs12 sm6 text-center>
                    <div class="error-container">
                        <h1 class="headline mb-6 white--text">404</h1>
                        <h2 class="subheading mb-6 white--text">Sorry, the page you're looking for doesn't exist.</h2>
                        <!-- <v-btn dark to="/" class="primary white--text" large>Home</v-btn> -->
                        <!-- <v-btn dark class="white--text" large @click="$router.go(-1)">Back</v-btn> -->
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- </s2-random-background> -->
    </v-theme-provider>
</template>

<script>
import Vue from "vue";
// import S2RandomBackground from "@/components/s2-random-background.vue";

export default Vue.extend({
    name: "error",
    components: {
        // S2RandomBackground
    }
});
</script>

<style scoped>
.error-container>.headline {
    font-size: 4.5rem !important;
    font-weight: 400;
    text-shadow: 1px 1px 1px #000;
}

.error-container>.subheading {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 3rem;
    text-shadow: 1px 1px 1px #000;
}
</style>
