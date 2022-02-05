<script setup lang="ts">
import { Feedback } from '../../../types';

import RoadmapFeedbackCard from './RoadmapFeedbackCard.vue';

const { feedbacks } = defineProps<{
  feedbacks?: Feedback[];
}>();
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col">
      <div class="mb-2 font-bold text-gray-700">Section title (3)</div>
      <div class="mb-6 text-gray-600">Section description</div>
    </div>
    <div class="flex flex-col">
      <RoadmapFeedbackCard />
    </div>
  </div>
</template>
