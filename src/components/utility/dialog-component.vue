<template>
    <v-dialog dark v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script lang="ts">
import Vue from "vue";
import { EventBus } from '@/plugins/event-bus';

interface DialogData {
    title: string;
    text: string;
}

export default Vue.extend({
    name: "dialog-component",
    data() {
        return {
            dialog: false,
            title: '',
            text: '',
        };
    },
    created() {
        EventBus.$on('show-dialog', (data: DialogData) => {
            this.title = data.title;
            this.text = data.text;
            this.dialog = true;
        });
    },

    beforeDestroy() {
        EventBus.$off('show-dialog');
    }
});
</script>
  