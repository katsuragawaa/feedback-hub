<script setup lang="ts">
import { useRoute } from 'vue-router';
import GoBackButton from '@/components/GoBackButton.vue';
import EditFeedbackButton from '@/components/EditFeedbackButton.vue';

const route = useRoute();
console.log(route.params.id);
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center bg-zinc-200 px-28 py-14 text-gray-600 md:px-6 xl:px-36"
  >
    <div class="min-w-[540px] max-w-3xl md:min-w-full flex justify-between">
      <GoBackButton textColor="gray-600" iconColor="#4661E6" />
      <EditFeedbackButton />
    </div>
  </div>
</template>
