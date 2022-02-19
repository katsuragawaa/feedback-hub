<script setup lang="ts">
import { FeedbackType } from '../../../types';

import RoadmapFeedbackCard from './RoadmapFeedbackCard.vue';

const { feedbacks } = defineProps<{
  feedbacks: FeedbackType[];
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
      <div class="mb-6 text-sm text-gray-600">{{ description }}</div>
    </div>
    <div class="flex flex-col">
      <RoadmapFeedbackCard
        v-for="feedback in feedbacks"
        :feedback="feedback"
        :key="feedback.id"
      />
    </div>
  </div>
</template>
