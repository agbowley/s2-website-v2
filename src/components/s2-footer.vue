<template>
  <v-footer
    class="justify-center"
    color="#292929"
    dark
    padless
    height="100"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey darken-3">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          class="mx-4"
          dark
          icon
          href="https://www.facebook.com/Savage-2-A-Tortured-Soul-105471299303"
          target="_blank"
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4"
          dark
          icon
          href="https://twitter.com/savage2game"
          target="_blank"
        >
          <v-icon size="24px">
            mdi-twitter
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4"
          dark
          icon
          href="https://discord.gg/Ee8KM5p"
          target="_blank"
        >
          <v-icon size="24px">
            mdi-discord
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4"
          dark
          icon
          href="https://gitlab.com/TalesofNewerth"
          target="_blank"
        >
          <v-icon size="24px">
            mdi-gitlab
          </v-icon>

        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        &copy; {{ (new Date()).getFullYear() }} — Tales of Newerth - Images courtesy of S2Games All Rights Reserved
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "s2-footer"
});
</script>

<style scoped>

</style>