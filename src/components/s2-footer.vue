<template>
    <v-footer class="footer-bg" dark padless height="200">
        <v-layout column wrap align-center justify-center>
            <v-flex class="text-xs-center pb-3">
                <v-btn dark icon href="https://www.facebook.com/Savage-2-A-Tortured-Soul-105471299303" target="_blank">
                    <v-icon size="24px">
                        mdi-facebook
                    </v-icon>
                </v-btn>
                <v-btn dark icon href="https://twitter.com/savage2game" target="_blank">
                    <v-icon size="24px">
                        mdi-twitter
                    </v-icon>
                </v-btn>
                <v-btn dark icon href="https://discord.gg/MCnmTr8FZJ" class="mdi mdi-discord" target="_blank">
                    <v-icon size="24px">
                        mdi-discord
                    </v-icon>
                </v-btn>
                <v-btn dark icon href="https://gitlab.com/TalesofNewerth" target="_blank">
                    <v-icon size="24px">
                        mdi-gitlab
                    </v-icon>
                </v-btn>
            </v-flex>
            <v-flex class="text-xs-center pb-10">
                <span class="subheading">Connect with us on social networks</span>
            </v-flex>
            <v-flex class="text-xs-center">
                <span class="cp-text">&copy; {{ (new Date()).getFullYear() }} — Tales of Newerth - Images courtesy of
                    S2Games All Rights
                    Reserved</span>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "s2-footer"
});
</script>

<style scoped>
.footer-bg {
    background-color: #000000;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
}

.cp-text {
    font-size: 0.6rem;
}
</style>