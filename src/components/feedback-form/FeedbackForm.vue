<script setup lang="ts">
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
    class="px-28 py-14 xl:px-36 text-gray-600 md:px-6 min-h-screen bg-zinc-200 flex flex-col items-center"
  >
    <div class="max-w-3xl min-w-[540px] md:min-w-full">
      <GoBackButton textColor="gray-600" iconColor="#4661E6" />
      <div
        class="flex flex-col bg-white rounded-xl px-11 pt-14 pb-11 mt-16 relative"
      >
        <div class="absolute left-11 -top-7 md:-top-5 md:w-10">
          <img
            src="../../assets/shared/icon-new-feedback.svg"
            alt="New feedback icon"
          />
        </div>
        <div class="text-xl font-bold">{{ title }}</div>
      </div>
    </div>
  </div>
</template>
