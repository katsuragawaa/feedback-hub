<script setup lang="ts">
import SortBySelector from './SortBySelector.vue';
import AddFeedbackButton from '@/components/AddFeedbackButton.vue';
import { SortByType } from '../../../types';

const emit = defineEmits<{
  (e: 'sort', option: SortByType): void;
}>();

const { feedbacksCount } = defineProps<{
  feedbacksCount: number;
}>();

function handleSort(option: SortByType) {
  emit('sort', option);
}
</script>

<template>
  <div
    class="flex h-fit w-full items-center justify-between rounded-xl bg-[#373f68] p-6 text-xs text-white sm:text-sm md:mt-[100px] md:rounded-none md:bg-transparent"
  >
    <div class="flex items-center">
      <img
        class="h-7 w-7 md:hidden"
        src="@/assets/suggestions/icon-suggestions.svg"
      />
      <span class="px-6 text-lg font-bold md:hidden"
        >{{ feedbacksCount }} Suggestions</span
      >
      <SortBySelector @sort="handleSort" />
    </div>
    <AddFeedbackButton />
  </div>
</template>
