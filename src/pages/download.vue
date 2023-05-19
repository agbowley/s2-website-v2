<template>
    <!-- <s2-random-background> -->
        <v-theme-provider dark>
            <v-container fill-height>
                <v-row align="center" class="white--text mx-auto full-brightness" justify="center">
                    <v-col class="white--text text-center" cols="12" tag="h1">
                        <span :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                            class="font-weight-light">
                            DOWNLOAD SAVAGE 2
                        </span>

                        <br>

                        <span :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
                            class="font-weight-black">
                            PLAY FREE NOW
                        </span>
                    </v-col>
                    <download-control></download-control>
                </v-row>
            </v-container>
        </v-theme-provider>
    <!-- </s2-random-background> -->
</template>

<script lang="ts">
import Vue from "vue";
import DownloadControl from "@/components/download-control.vue";

export default Vue.extend({
    name: "download",
    components: {
        DownloadControl
    }
});
</script>

<style scoped>
.font-weight-light,
.font-weight-black {
    text-shadow: 1px 1px 1px #000;
}
</style>