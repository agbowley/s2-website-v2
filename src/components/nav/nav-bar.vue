<!-- NavBar.vue -->
<template>
    <v-btn icon @click="$emit('toggle')">
        <v-icon>mdi-menu</v-icon>
    </v-btn>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: 'nav-bar'
});
</script>