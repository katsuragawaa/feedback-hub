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
  <div class="mt-6 md:mt-0 md:mx-6">
    <FeedbackCard
      v-if="filteredFeedbacks.length"
      v-for="feedback in filteredFeedbacks"
      :key="feedback.id"
      :feedback="feedback"
    />
    <FeedbackEmpty v-else :selectedFilter="selectedFilter" :noFeedback="noFeedback" />
  </div>
</template>
