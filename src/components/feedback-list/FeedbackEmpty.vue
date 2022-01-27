<script setup lang="ts">
const { selectedFilter, noFeedback } = defineProps({
  selectedFilter: {
    type: String,
    default: '',
  },
  noFeedback: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="bg-white w-full rounded-xl px-6 py-28 flex flex-col items-center text-center">
    <div>
      <img class="w-36" src="../../assets/suggestions/illustration-empty.svg" />
    </div>
    <div class="mt-14 mb-6">
      <div class="text-2xl font-bold text-gray-600">
        <span v-if="noFeedback">There is no feedback yet</span>
        <span v-else>No feedback of category "{{ selectedFilter }}"</span>
      </div>
    </div>
    <div>
      <span
        class="text-gray-500 text-sm sm:text-base"
      >Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</span>
    </div>
  </div>
</template>