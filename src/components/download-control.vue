<template>
    <div>
        <template v-if="os === 'linux'">
            <v-btn x-large tile class="mt-6 swipe-animation primary elevation-3 white--text"
                href="https://download.talesofnewerth.com/Savage2-2.1.1.1-linux-installer.run"
                target="_blank"><v-icon>
                    mdi-linux
                </v-icon> Download 32 Bits</v-btn>
            <v-btn x-large tile class="mt-6 swipe-animation primary elevation-3 white--text"
                href="https://download.talesofnewerth.com/Savage2-2.1.1.1-linux-x64-installer.run"
                target="_blank"><v-icon>
                    mdi-linux
                </v-icon> Download 64 Bits</v-btn>
        </template>
        <v-btn v-else-if="os === 'macos'" x-large tile class="mt-6 swipe-animation primary elevation-3 white--text"
            href="https://download.talesofnewerth.com/Savage2-2.1.1.1-osx-installer.zip"
            target="_blank"><v-icon>
                mdi-apple
            </v-icon> Download</v-btn>
        <v-btn v-else x-large tile class="mt-6 swipe-animation primary elevation-3 white--text"
            href="https://download.talesofnewerth.com/Savage2-2.1.1.1-windows-installer.exe"
            target="_blank"><v-icon>
                mdi-microsoft-windows
            </v-icon> Download</v-btn>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Bowser from "bowser";

export default Vue.extend({
    name: "download-control",
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