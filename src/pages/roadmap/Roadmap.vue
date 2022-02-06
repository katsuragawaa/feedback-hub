<script setup lang="ts">
import { Feedback } from '../../types';

import RoadmapToolbar from './roadmap-toolbar/RoadmapToolbar.vue';
import RoadmapColumn from './roadmap-column/RoadmapColumn.vue';
import Spinner from '@/components/Spinner.vue';

import { readAllFeedbackData } from '../../services/DatabaseService';
import { ref, onMounted, computed } from 'vue';
import _ from 'lodash';

const loading = ref(false);
const feedbacks = ref([] as Feedback[]);

onMounted(async () => {
  loading.value = true;
  const fetchedFeedbacksObject = await readAllFeedbackData();
  feedbacks.value = Object.values(fetchedFeedbacksObject);
  loading.value = false;
});

const plannedFeedbacks = computed(() =>
  _.filter(feedbacks.value, { status: 'Planned' })
);

const inProgressFeedbacks = computed(() =>
  _.filter(feedbacks.value, {
    status: 'In progress',
  })
);

const liveFeedbacks = computed(() =>
  _.filter(feedbacks.value, { status: 'Live' })
);

const statusColumns = computed(() => [
  {
    title: 'Planned',
    description: 'Ideas prioritized for research',
    feedbacks: plannedFeedbacks.value,
  },
  {
    title: 'In progress',
    description: 'Currently being developed',
    feedbacks: inProgressFeedbacks.value,
    customClass: 'mx-10 md:mx-0',
  },
  {
    title: 'Live',
    description: 'Released features',
    feedbacks: liveFeedbacks.value,
  },
]);
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-zinc-200 px-10 py-14 md:p-0 xl:px-36"
  >
    <RoadmapToolbar />

    <div v-if="!loading" class="mt-8 flex justify-between">
      <RoadmapColumn
        v-for="column in statusColumns"
        :feedbacks="column.feedbacks"
        :class="column.customClass"
      />
    </div>

    <div v-else class="my-96 mx-auto w-28 text-purple-700">
      <Spinner :size="28" />
    </div>
  </div>
</template>
