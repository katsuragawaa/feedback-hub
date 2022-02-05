<script setup lang="ts">
import RoadmapToolbar from './roadmap-toolbar/RoadmapToolbar.vue';
import RoadmapColumn from './roadmap-column/RoadmapColumn.vue';
import Spinner from '../../components/Spinner.vue';

import { readAllFeedbackData } from '../../services/DatabaseService';
import { ref, onMounted } from 'vue';

type Feedback = {
  id: string;
  title: string;
  details: string;
  category: string;
  status: string;
  votes: number;
  comments: string[];
};

const loading = ref(false);
const feedbacks = ref([] as Feedback[]);

onMounted(async () => {
  loading.value = true;
  const fetchedFeedbacksObject = await readAllFeedbackData();
  feedbacks.value = Object.values(fetchedFeedbacksObject);
  loading.value = false;
  console.log(feedbacks.value);
});
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-zinc-200 px-10 py-14 md:p-0 xl:px-36"
  >
    <RoadmapToolbar />

    <div v-if="!loading" class="mt-8 flex justify-between">
      <RoadmapColumn :feedbacks="feedbacks" />
      <RoadmapColumn class="mx-10 md:mx-0" :feedbacks="feedbacks" />
      <RoadmapColumn :feedbacks="feedbacks" />
    </div>

    <div v-else class="my-96 mx-auto w-28 text-purple-700">
      <Spinner :size="28" />
    </div>
  </div>
</template>
