<template>
    <v-app dark>
        <s2-app-bar/>

        <v-main>
            <nuxt/>
        </v-main>
      <s2-footer/>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import S2AppBar from "@/components/s2-app-bar.vue";
import S2Footer from "@/components/s2-footer.vue";

export default Vue.extend({
    name: "default",
    components: {
      S2AppBar,
      S2Footer
    }
});
</script>

<style scoped>

</style>