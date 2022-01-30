<script setup lang="ts">
import FeedbackForm from '../components/feedback-form/FeedbackForm.vue';

type FeedbackFormData = {
  title: string;
  category: string;
  status: string;
  details: string;
};

function addFeedback(feedback: FeedbackFormData) {
  console.log(feedback);
}
</script>

<template>
  <FeedbackForm title="Create a feedback" @addFeedback="addFeedback" />
</template>
