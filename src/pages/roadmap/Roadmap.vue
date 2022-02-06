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
const currentTab = ref(0);

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
    tabColor: 'bg-orange-400',
  },
  {
    title: 'In progress',
    description: 'Currently being developed',
    feedbacks: inProgressFeedbacks.value,
    customClass: 'mx-4 md:mx-0',
    tabColor: 'bg-purple-400',
  },
  {
    title: 'Live',
    description: 'Released features',
    feedbacks: liveFeedbacks.value,
    tabColor: 'bg-blue-400',
  },
]);

function changeTab(columnIndex: number) {
  currentTab.value = columnIndex;
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-zinc-200 px-10 py-14 md:p-0 xl:px-36"
  >
    <RoadmapToolbar />

    <div
      class="hidden cursor-pointer items-center justify-between text-center text-sm text-gray-400 md:flex"
    >
      <div
        class="w-full"
        v-for="(column, index) in statusColumns"
        @click="() => changeTab(index)"
      >
        <div class="my-3" :class="{ 'text-black': true }">
          {{ column.title }}
        </div>
        <div
          v-if="index == currentTab"
          class="h-1"
          :class="column.tabColor"
        ></div>
      </div>
    </div>

    <div class="h-[1px] bg-gray-300"></div>

    <div class="mx-6 hidden md:flex">
      <div v-if="!loading" class="mt-8 flex w-full justify-between">
        <RoadmapColumn
          :feedbacks="statusColumns[currentTab].feedbacks"
          :title="statusColumns[currentTab].title"
          :description="statusColumns[currentTab].description"
          :class="statusColumns[currentTab].customClass"
          :key="currentTab"
        />
      </div>
      <div v-else class="my-96 mx-auto w-28 text-purple-700">
        <Spinner :size="28" />
      </div>
    </div>

    <div class="md:hidden">
      <div v-if="!loading" class="mt-8 flex justify-between">
        <RoadmapColumn
          v-for="column in statusColumns"
          :feedbacks="column.feedbacks"
          :title="column.title"
          :description="column.description"
          :class="column.customClass"
        />
      </div>

      <div v-else class="my-96 mx-auto w-28 text-purple-700">
        <Spinner :size="28" />
      </div>
    </div>
  </div>
</template>
