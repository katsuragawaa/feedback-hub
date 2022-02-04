<script setup lang="ts">
import AddFeedbackButton from '../shared/AddFeedbackButton.vue';
import GoBackButton from '../shared/GoBackButton.vue';
</script>

<template>
  <div
    class="flex h-fit w-full items-center justify-between rounded-xl bg-[#373f68] p-6 text-white md:rounded-none"
  >
    <div class="flex flex-col">
      <GoBackButton />
      <div class="mt-2 text-2xl font-bold md:text-base">Roadmap</div>
    </div>
    <AddFeedbackButton />
  </div>
</template>
