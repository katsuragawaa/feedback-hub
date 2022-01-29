<script lang="ts">
import { defineComponent } from 'vue';
import router from '../../router';

export default defineComponent({
  name: 'GoBackButton',
  props: {
    textColor: {
      type: String,
      default: 'white',
    },
    iconColor: {
      type: String,
      default: '#fff',
    },
  },
  methods: {
    goBack() {
      router.back();
    },
  },
  computed: {
    textClass() {
      return `text-${this.textColor} font-bold ml-3 text-xs sm:text-sm`;
    },
  },
});
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
