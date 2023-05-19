<template>
    <transition name="fade">
        <div id="splash-screen" class="background-hellscape">
            <!-- <v-img src="img\background-hellbourne.png" class="dim-image" rel="preload" preload="metadata"> -->
            <div class="splash-bg vertical-fade-reverse">
                <v-col>
                    <v-img width="30vw" src="img/official-logo.png" preload="metadata" />
                    <!-- <v-img width="20vw" src="img/logo_sm.png" preload="metadata" /> -->
                    <!-- <v-progress-circular :size="70" :width="7" indeterminate></v-progress-circular> -->
                </v-col>
            </div>
            <!-- </v-img> -->
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "splash-screen"
});
</script>

<style scoped>
#splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
        linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
        linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
        linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
        linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
        linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 16px 14px; */
    /* background-image: url(src\static\img\background-hellbourne.png); */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    /* Make sure it's on top of everything else */
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.splash-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5), #0c0c0c 100%),
        linear-gradient(to top, transparent 50%, rgba(0, 0, 0, 0.5), #0c0c0c 100%) !important;
    background-repeat: repeat;
    background-size: cover;
    z-index: 9999;
}

.splash-bg .v-progress-circular {
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: auto !important;
    color: #dfdfdf;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.splash-bg .v-image {
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: auto !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: visible;
}

::v-deep .splash-bg .v-image .v-image__image--cover {
    background-size: contain !important;
}
</style>
