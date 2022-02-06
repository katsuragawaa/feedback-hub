<script setup lang="ts">
import { Feedback } from '../../types';

import GoBackButton from '@/components/GoBackButton.vue';
import EditFeedbackButton from '@/components/EditFeedbackButton.vue';
import FeedbackCard from '../../components/FeedbackCard.vue';

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { readFeedbackData } from '../../services/DatabaseService';

const route = useRoute();

const loading = ref(false);
const feedback = ref({} as Feedback);

onMounted(async () => {
  loading.value = true;
  const feedbackId = route.params.id;
  feedback.value = await readFeedbackData(feedbackId as string);
  console.log(feedback.value, loading.value);
  loading.value = false;
});
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center bg-zinc-200 px-28 py-14 text-gray-600 md:px-6 xl:px-36"
  >
    <div class="min-w-[540px] max-w-3xl md:min-w-full">
      <div class="flex justify-between">
        <GoBackButton textColor="gray-600" iconColor="#4661E6" />
        <EditFeedbackButton />
      </div>
      <FeedbackCard v-if="!loading" :feedback="feedback" />
    </div>
  </div>
</template>
