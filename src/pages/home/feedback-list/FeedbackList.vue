<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FeedbackCard from './FeedbackCard.vue';
import FeedbackEmpty from './FeedbackEmpty.vue';

type Feedback = {
  id: string;
  title: string;
  details: string;
  category: string;
  status: string;
  votes: number;
  comments: string[]; // TODO
};

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
