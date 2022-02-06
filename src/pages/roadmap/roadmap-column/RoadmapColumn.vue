<script setup lang="ts">
import { Feedback } from '../../../types';

import RoadmapFeedbackCard from './RoadmapFeedbackCard.vue';

const { feedbacks } = defineProps<{
  feedbacks: Feedback[];
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col">
      <div class="mb-2 font-bold text-gray-700">
        {{ title }} ({{ feedbacks.length }})
      </div>
      <div class="mb-6 text-gray-600 text-sm">{{ description }}</div>
    </div>
    <div class="flex flex-col">
      <RoadmapFeedbackCard v-for="feedback in feedbacks" :feedback="feedback" />
    </div>
  </div>
</template>
