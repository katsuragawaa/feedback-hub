<script setup lang="ts">
import SortBySelector from './SortBySelector.vue'
import AddFeedbackButton from './AddFeedbackButton.vue';

type SortBy = {
  title: string;
  index: number;
}

const emit = defineEmits<{
  (e: 'sort', option: SortBy): void;
}>()

const { feedbacksCount } = defineProps<{
  feedbacksCount: number
}>()

function handleSort(option: SortBy) {
  emit('sort', option)
}



</script>

<template>
  <div
    class="w-full h-fit p-6 bg-[#373f68] rounded-xl text-white sm:text-sm text-xs flex justify-between items-center md:mt-[100px] md:rounded-none md:bg-transparent"
  >
    <div class="flex items-center">
      <img class="w-7 h-7 md:hidden" src="../../assets/suggestions/icon-suggestions.svg" />
      <span class="font-bold text-lg px-6 md:hidden">{{ feedbacksCount }} Suggestions</span>
      <SortBySelector @sort="handleSort" />
    </div>
    <AddFeedbackButton />
  </div>
</template>