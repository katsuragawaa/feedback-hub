<script lang="ts">
import { Feedback } from '../../../types';
import router from '../../../router';

import { defineComponent, PropType } from 'vue';
import FeedbackCard from '@/components/FeedbackCard.vue';
import FeedbackEmpty from './FeedbackEmpty.vue';

export default defineComponent({
  name: 'FeedbackList',
  components: {
    FeedbackCard,
    FeedbackEmpty,
  },
  props: {
    selectedFilter: {
      type: String,
      required: true,
    },
    filteredFeedbacks: {
      type: Array as PropType<Feedback[]>,
      required: true,
    },
    noFeedback: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goToFeedbackDetails(feedback: Feedback) {
      router.push({
        name: 'FeedbackDetails',
        params: { id: feedback.id },
      });
    },
  },
});
</script>

<template>
  <div class="mt-6 transition md:mx-6 md:mt-0">
    <transition-group name="list-slide" v-if="filteredFeedbacks.length">
      <FeedbackCard
        v-for="feedback in filteredFeedbacks"
        :key="feedback.id"
        :feedback="feedback"
        class="transition duration-500"
        @click="goToFeedbackDetails(feedback)"
      />
    </transition-group>
    <FeedbackEmpty
      v-else
      :selectedFilter="selectedFilter"
      :noFeedback="noFeedback"
    />
  </div>
</template>

<style scoped>
.list-slide-enter-from,
.list-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-slide-leave-active {
  position: absolute;
}
</style>
