<template>
  <v-app-bar app dark class="grey darken-4">
    <v-img src="img/logo.png" max-width="250px">

    </v-img>
    <v-spacer/>
    <v-btn text>Sign in</v-btn>
    <v-btn text to="/download" nuxt>Download</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "s2-app-bar"
});
</script>

<style>

</style>