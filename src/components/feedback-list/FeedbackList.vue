<script setup lang="ts">
import { ref } from 'vue'
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
    type: 'Feature',
    votes: 123,
    comments: 4,
  },
  {
    id: '2',
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    type: 'Enhancement',
    votes: 23,
    comments: 13,
  },
]

const { category } = defineProps<{
  category: string
}>()

const feedbacks = ref<Feedback[]>([])

setTimeout(() => {
  feedbacks.value = dummyFeedbacks
}, 5000)

// TODO: get selected categories
</script>

<template>
  <div class="mt-6 md:mt-0 md:mx-6">
    <FeedbackCard v-if="feedbacks.length" v-for="feedback in feedbacks" :feedback="feedback" />
    <FeedbackEmpty v-else :category="category" :noFeedback="feedbacks.length === 0" />
  </div>
</template>
