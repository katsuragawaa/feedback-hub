<script setup lang="ts">
import { writeFeedbackData } from '../services/DatabaseService';
import FeedbackForm from '../components/feedback-form/FeedbackForm.vue';

type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
};

function saveFeedback(feedback: FeedbackFormData) {
  writeFeedbackData(feedback);
}
</script>

<template>
  <FeedbackForm title="Create a feedback" @saveFeedback="saveFeedback" />
</template>
