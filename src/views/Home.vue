<script lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue';
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue';
import FeedbackList from '../components/feedback-list/FeedbackList.vue';
import { defineComponent } from 'vue';
import _ from 'lodash';
import { readAllFeedbackData } from '../services/DatabaseService';

type SortBy = {
  title: string;
  index: number;
  key: string;
  order: string;
};

type Feedback = {
  id: string;
  title: string;
  details: string;
  category: string;
  status: string;
  votes: number;
  comments: number;
};

const dummyFeedbacks = [
  {
    id: '1',
    title: 'More comprehensive reports',
    details:
      'It would be great to see a more detailed breakdown of solutions.',
    category: 'Enhancement',
    status: 'Suggestions',
    votes: 123,
    comments: 4,
  },
  {
    id: '2',
    title: 'Add tags for solutions',
    details: 'Easier to search for solutions based on a specific stack.',
    category: 'Feature',
    status: 'Suggestions',
    votes: 23,
    comments: 13,
  },
];

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
    };
  },
  async mounted() {
    const fetchedFeedbacksObject = await readAllFeedbackData();
    this.feedbacks = Object.values(fetchedFeedbacksObject);
  },
  methods: {
    handleFilterSelection(filter: string) {
      this.selectedFilter = filter;
    },
    handleSort(option: SortBy) {
      const order = option.order === 'asc' ? 'asc' : 'desc'; // TS won't let me just use option.order
      this.feedbacks = _.orderBy(this.feedbacks, [option.key], [order]);
    },
  },
  computed: {
    filteredFeedbacks(): Feedback[] {
      const filter = this.selectedFilter || 'All';
      if (filter === 'All') {
        return this.feedbacks;
      }
      return this.feedbacks.filter((feedback) => feedback.category === filter);
    },
  },
});
</script>

<template>
  <div
    class="px-10 xl:px-36 py-14 md:p-0 min-h-screen bg-zinc-200 flex flex-col xl:flex-row"
  >
    <MenuCards @filterSelected="handleFilterSelection" />
    <div class="h-10 md:hidden"></div>
    <div class="flex flex-col xl:ml-7 w-full">
      <FeedbackToolbar
        :feedbacksCount="filteredFeedbacks.length"
        @sort="handleSort"
      />
      <FeedbackList
        :selectedFilter="selectedFilter"
        :filteredFeedbacks="filteredFeedbacks"
        :noFeedback="feedbacks.length === 0"
      />
    </div>
  </div>
</template>
