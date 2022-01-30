<script setup lang="ts">
import NewFeedbackIcon from './icons/NewFeedbackIcon.vue';
import GoBackButton from '../shared/GoBackButton.vue';
import {} from 'vue';

const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="px-10 py-14 xl:px-36 text-gray-600 md:px-6 min-h-screen bg-zinc-200 flex flex-col"
  >
    <GoBackButton textColor="gray-600" iconColor="#4661E6" />
    <div
      class="flex flex-col bg-white rounded-xl px-11 pt-14 pb-11 mt-16 relative"
    >
      <div class="absolute left-11 -top-7">
        <NewFeedbackIcon />
      </div>
      <div class="text-xl font-bold">{{ title }}</div>
    </div>
  </div>
</template>
