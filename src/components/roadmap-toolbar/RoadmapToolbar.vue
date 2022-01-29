<script setup lang="ts">
import AddFeedbackButton from '../shared/AddFeedbackButton.vue';
import GoBackButton from '../shared/GoBackButton.vue';
</script>

<template>
  <div
    class="w-full h-fit p-6 bg-[#373f68] rounded-xl text-white flex justify-between items-center md:rounded-none"
  >
    <div class="flex flex-col">
      <GoBackButton />
      <div class="text-2xl md:text-base font-bold mt-2">Roadmap</div>
    </div>
    <AddFeedbackButton />
  </div>
</template>
