<template>
  <s2-random-background>
  </s2-random-background>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import S2RandomBackground from "@/components/s2-random-background.vue";

export default Vue.extend({
  name: "register",
  components: {
    S2RandomBackground
  },
  methods: {
    async makeAccount() {
      axios.post("")
    }
  },
});
</script>

<style scoped>

</style>