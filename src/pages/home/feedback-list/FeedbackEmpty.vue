<script setup lang="ts">
import AddFeedbackButton from '../../../components/AddFeedbackButton.vue';

const { selectedFilter, noFeedback } = defineProps({
  selectedFilter: {
    type: String,
    default: '',
  },
  noFeedback: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="flex w-full flex-col items-center rounded-xl bg-white px-6 py-28 text-center"
  >
    <div>
      <img class="w-36" src="../../../assets/suggestions/illustration-empty.svg" />
    </div>
    <div class="mt-14 mb-6">
      <div class="text-2xl font-bold text-gray-600">
        <span v-if="noFeedback">There is no feedback yet</span>
        <span v-else>No feedback of category "{{ selectedFilter }}"</span>
      </div>
    </div>
    <div class="mb-12">
      <span class="text-sm text-gray-500 sm:text-base"
        >Got a suggestion? Found a bug that needs to be squashed? We love
        hearing about new ideas to improve our app.</span
      >
    </div>
    <AddFeedbackButton />
  </div>
</template>
