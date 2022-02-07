<script setup lang="ts">
import { Feedback } from '../../types';

import FeedbackForm from './feedback-form/FeedbackForm.vue';

import { writeFeedbackData } from '../../services/DatabaseService';
import router from '../../router';
import { ref } from 'vue';

const loading = ref(false);

function saveFeedback(feedback: Feedback) {
  loading.value = true;

  setTimeout(() => {
    writeFeedbackData({
      ...feedback,
      votesCount: 0,
      commentsCount: 0,
    });
    loading.value = false;
    router.push({ name: 'Home' });
  }, 2000);
}
</script>

<template>
  <FeedbackForm
    title="Create a feedback"
    @saveFeedback="saveFeedback"
    :loading="loading"
  />
</template>
