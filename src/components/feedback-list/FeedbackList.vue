<script lang="ts">
import { defineComponent } from 'vue'
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

const dummyFeedbacks = [
  {
    id: '1',
    title: 'More comprehensive reports',
    description:
      'It would be great to see a more detailed breakdown of solutions.',
    type: 'Enhancement',
    votes: 123,
    comments: 4,
  },
  {
    id: '2',
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    type: 'Feature',
    votes: 23,
    comments: 13,
  },
]

export default defineComponent({
  name: 'FeedbackList',
  components: {
    FeedbackCard,
    FeedbackEmpty
  },
  props: {
    selectedFilter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      feedbacks: [] as Feedback[]
    }
  },
  methods: {
    fetchFeedback(): void {
      this.feedbacks = dummyFeedbacks
    }
  },
  computed: {
    filteredFeedbacks(): Feedback[] {
      const filter = this.selectedFilter
      if (filter === 'All') {
        return dummyFeedbacks
      }
      return dummyFeedbacks.filter((feedback) => feedback.type === filter)
    }
  }
})
</script>

<template>
  <div class="mt-6 md:mt-0 md:mx-6">
    <FeedbackCard
      v-if="filteredFeedbacks.length"
      v-for="feedback in filteredFeedbacks"
      :feedback="feedback"
    />
    <FeedbackEmpty
      v-else
      :selectedFilter="selectedFilter"
      :noFeedback="filteredFeedbacks.length === 0"
    />
  </div>
</template>
