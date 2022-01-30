<script setup lang="ts">
import { writeFeedbackData } from '../services/DatabaseService';
import FeedbackForm from '../components/feedback-form/FeedbackForm.vue';
import router from '../router';
import { ref } from 'vue';

type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
  votes?: number;
};

const loading = ref(false);

function saveFeedback(feedback: FeedbackFormData) {
  loading.value = true;

  setTimeout(() => {
    writeFeedbackData({ ...feedback, votes: 0 });
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
