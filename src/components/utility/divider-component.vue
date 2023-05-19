<template>
    <hr :class="{ 'divider': !animate, 'divider-animated': animate }" 
        :style="{ borderColor: color, borderTopWidth: borderWidth + 'px' }"
        class="mx-2" />
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        animate: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#ffffff'
        },
        borderWidth: {
            type: String,
            default: '1',
        },
    }
});
</script>
  
<style scoped>
hr {
    border: 0;
    border-top: 1px solid white;
    margin: 0;
    flex-grow: 1;
    transform-origin: center;
}

.divider {
  border: none;
  border-top: 1px solid;
}


.border-width {
  border-width: var(--borderWidth)px !important;
}

/* Animated divider styles */
.divider-animated {
  border: none;
  border-top: 1px solid;
  transform-origin: center;
  animation: slide-in 2s forwards;
}

/* Define the slide-in animation */
@keyframes slide-in {
    0% {
        transform: scaleX(0);
    }

    100% {
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transform: scaleX(1);
    }
}
</style>
  