<script setup lang="ts">
import SortBySelector from './SortBySelector.vue'
import AddFeedbackButton from './AddFeedbackButton.vue';
</script>

<template>
  <div class="w-full p-6 bg-[#373f68] rounded-xl text-white flex justify-between">
    <div class="flex items-center">
      <img class="w-7 h-7" src="../../assets/suggestions/icon-suggestions.svg" />
      <span class="font-bold text-lg px-6 ">7 Suggestions</span>
      <SortBySelector />
    </div>
    <AddFeedbackButton />
  </div>
</template>