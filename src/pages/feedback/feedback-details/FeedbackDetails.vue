<script setup lang="ts">
import { FeedbackType } from '../../../types';

import GoBackButton from '@/components/GoBackButton.vue';
import EditFeedbackButton from '@/components/EditFeedbackButton.vue';
import FeedbackCard from '@/components/FeedbackCard.vue';
import Spinner from '@/components/Spinner.vue';
import CommentList from './comment-list/CommentList.vue';
import CommentForm from './comment-form/CommentForm.vue';

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { readFeedbackData } from '../../../services/DatabaseService';

const route = useRoute();

const loading = ref(false);
const feedback = ref({} as FeedbackType);

onMounted(async () => {
  loading.value = true;
  const feedbackId = route.params.id;
  feedback.value = await readFeedbackData(feedbackId as string);
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
      <div v-if="!loading" class="mt-8 flex flex-col">
        <FeedbackCard :feedback="feedback" :clickable="false" />
        <CommentList />
        <CommentForm :feedbackId="feedback.id" />
      </div>

      <div v-else class="my-96 mx-auto w-28 text-purple-700">
        <Spinner :size="28" />
      </div>
    </div>
  </div>
</template>
