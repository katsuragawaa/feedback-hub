<script lang="ts">
import { defineComponent, PropType } from 'vue'
import FeedbackCard from './FeedbackCard.vue'
import FeedbackEmpty from './FeedbackEmpty.vue'

type Feedback = {
  id: string
  title: string
  description: string
  type: string
  votes: number
  comments: number
}

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
      default: false
    }
  },
})
</script>

<template>
  <transition name="fade">
    <div class="mt-6 transition md:mt-0 md:mx-6" v-if="filteredFeedbacks.length">
      <transition-group name="list-slide">
        <FeedbackCard
          v-for="feedback in filteredFeedbacks"
          :key="feedback.id"
          :feedback="feedback"
          class="transition duration-500"
        />
      </transition-group>
    </div>
    <div v-else class="mt-6 transition md:mt-0 md:mx-6">
      <FeedbackEmpty :selectedFilter="selectedFilter" :noFeedback="noFeedback" />
    </div>
  </transition>
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
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>