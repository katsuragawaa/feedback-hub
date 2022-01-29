<script setup lang="ts">
import { computed } from 'vue';
import router from '../../router';

const { textColor, iconColor } = defineProps({
  textColor: {
    type: String,
    default: 'white',
  },
  iconColor: {
    type: String,
    default: '#fff',
  },
});

const textClass = computed(() => {
  return `text-${textColor} font-bold ml-3 text-xs sm:text-sm`;
});

function goBack() {
  router.back();
}
</script>

<template>
  <div class="flex items-center cursor-pointer hover:underline" @click="goBack">
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L2 5l4-4"
        :stroke="iconColor"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
    <div :class="textClass">Go back</div>
  </div>
</template>
