<script setup lang="ts">
import SortBySelector from './SortBySelector.vue'
import AddFeedbackButton from './AddFeedbackButton.vue';
</script>

<template>
  <div
    class="w-full h-fit p-6 bg-[#373f68] rounded-xl text-white sm:text-sm text-xs flex justify-between items-center md:mt-[100px] md:rounded-none md:bg-transparent"
  >
    <div class="flex items-center">
      <img class="w-7 h-7 md:hidden" src="../../assets/suggestions/icon-suggestions.svg" />
      <span class="font-bold text-lg px-6 md:hidden">7 Suggestions</span>
      <SortBySelector />
    </div>
    <AddFeedbackButton />
  </div>
</template>