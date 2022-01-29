<script lang="ts">
import { defineComponent } from 'vue';

import GoBackButton from '../shared/GoBackButton.vue';
import NewFeedbackIcon from './icons/NewFeedbackIcon.vue';

export default defineComponent({
  name: 'FeedbackForm',
  components: {
    GoBackButton,
    NewFeedbackIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div
    class="px-10 py-14 xl:px-36 text-gray-600 md:p-0 min-h-screen bg-zinc-200 flex flex-col"
  >
    <GoBackButton textColor="gray-600" iconColor="#4661E6" />

    <div
      class="flex flex-col bg-white rounded-xl px-11 pt-14 pb-11 mt-16 relative"
    >
      <div class="absolute left-11 -top-7">
        <NewFeedbackIcon />
      </div>
      <div>Create a feedback</div>
    </div>
  </div>
</template>
