<!-- NavMenu.vue -->
<template>
    <v-navigation-drawer app dark :width="window.innerWidth/3 + 'px'" class="nav-drawer" :value="visible" persistent right disable-resize-watcher @input="updateVisible">
        <logo class="ma-1 mx-auto d-flex align-center justify-center"></logo>

        <hr />

        <links class="d-flex" direction="vertical"></links>

        <hr />

        <v-btn to="/login" class="mx-2 my-2 d-flex" raised>Sign In</v-btn>
        <v-btn to="/register" class="mx-2 my-2 primary d-flex" raised>Play free</v-btn>
    </v-navigation-drawer>
</template>

<script>
import Vue from "vue";
import Links from "@/components/links.vue"
import Logo from "@/components/logo.vue"

export default Vue.extend({
    components: {
        Links,
        Logo
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        window: {
            innerWidth: 0
        },
    }),
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        updateVisible(val) {
            if (!val) {
                this.$emit('update:visible', val);
            }
        },
        handleResize() {
            this.window.innerWidth = window.innerWidth;
        }
    }
});
</script>

<style>
.v-overlay {
    z-index: 5 !important;
}
.theme--dark.v-navigation-drawer {
    background-color: #0c0c0c;
}
hr {
    opacity: 0.5;
}
</style>
