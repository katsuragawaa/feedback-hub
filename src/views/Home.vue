<script lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue'
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue'
import FeedbackList from '../components/feedback-list/FeedbackList.vue'
import { defineComponent } from 'vue'
import _ from 'lodash'

type SortBy = {
  title: string
  index: number
  key: string
  order: string
}

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
  name: 'Home',
  components: {
    MenuCards,
    FeedbackToolbar,
    FeedbackList,
  },
  data() {
    return {
      selectedFilter: '',
      feedbacks: [] as Feedback[],
    }
  },
  mounted() {
    this.feedbacks = dummyFeedbacks
  },
  methods: {
    handleFilterSelection(filter: string) {
      this.selectedFilter = filter
    },
    handleSort(option: SortBy) {
      this.feedbacks = _.orderBy(
        this.feedbacks,
        [option.key],
      )

      if (option.order === 'asc') return

      this.feedbacks.reverse()
    },
  },
  computed: {
    filteredFeedbacks(): Feedback[] {
      const filter = this.selectedFilter || 'All'
      if (filter === 'All') {
        return this.feedbacks
      }
      return this.feedbacks.filter((feedback) => feedback.type === filter)
    },
  },
})
</script>

<template>
  <div class="px-10 xl:px-36 py-14 md:p-0 min-h-screen bg-zinc-200 flex flex-col xl:flex-row">
    <MenuCards @filterSelected="handleFilterSelection" />
    <div class="h-10 md:hidden"></div>
    <div class="flex flex-col xl:ml-7 w-full">
      <FeedbackToolbar :feedbacksCount="filteredFeedbacks.length" @sort="handleSort" />
      <FeedbackList
        :selectedFilter="selectedFilter"
        :filteredFeedbacks="filteredFeedbacks"
        :noFeedback="feedbacks.length === 0"
      />
    </div>
  </div>
</template>
