<template>
  <s2-random-background>
    <v-theme-provider dark>
      <v-container fill-height>
        <v-row
          align="center"
          class="white--text mx-auto full-brightness"
          justify="center"
        >
          <v-col
            class="white--text text-center"
            cols="12"
            tag="h1"
          >
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      DOWNLOAD SAVAGE 2
                    </span>

            <br>

            <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
              class="font-weight-black"
            >
                      PLAY FREE NOW
                    </span>

          </v-col>
          <template v-if="os === 'linux'">
            <v-btn x-large dark href="https://download.talesofnewerth.com/Savage2-2.1.1.1-linux-installer.run" target="_blank">Download 32 Bits</v-btn>
            <v-btn x-large dark href="https://download.talesofnewerth.com/Savage2-2.1.1.1-linux-x64-installer.run" target="_blank">Download 64 Bits</v-btn>
          </template>
          <v-btn v-else-if="os === 'macos'" x-large dark href="https://download.talesofnewerth.com/Savage2-2.1.1.1-osx-installer.zip" target="_blank">Download</v-btn>
          <v-btn v-else x-large dark href="https://download.talesofnewerth.com/Savage2-2.1.1.1-windows-installer.exe" target="_blank">Download</v-btn>
        </v-row>
      </v-container>
    </v-theme-provider>
  </s2-random-background>
</template>

<script lang="ts">
import Vue from "vue";
import S2RandomBackground from "@/components/s2-random-background.vue";
import Bowser from "bowser";

export default Vue.extend({
  name: "download",
  components: {
    S2RandomBackground
  },
  data() {
    return {
      os: ""
    }
  },
  mounted() {
    let bowser = Bowser.getParser(window.navigator.userAgent);
    this.os = bowser.getOSName(true);
  }
});
</script>

<style scoped>

</style>