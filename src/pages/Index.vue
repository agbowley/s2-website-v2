<template>
      <section id="hero">
        <v-row no-gutters>
          <div>
            <video preload="metadata" style="object-fit:cover;" data-testid="hero:video" playsinline loop muted autoplay data-object-fit="cover" data-object-position="center center">
              <source src="/vid/hero.webm" type="video/webm">
            </video>
            <div class="video-description">
              <v-img max-width="65vw" max-height="65vh" src="img/logo.png"/>
              <v-btn dark to="/download" nuxt>Play now</v-btn>
            </div>
          </div>
        </v-row>
      </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Test"
});
</script>

<style scoped>
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.video-description {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>