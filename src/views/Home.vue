<script lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue';
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue';
import FeedbackList from '../components/feedback-list/FeedbackList.vue';
import { defineComponent } from 'vue';
import _ from 'lodash';
import { readAllFeedbackData } from '../services/DatabaseService';
import Spinner from '../components/shared/Spinner.vue';

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
  comments: string[];
};

export default defineComponent({
  name: 'Home',
  components: {
    MenuCards,
    FeedbackToolbar,
    FeedbackList,
    Spinner,
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
    <div class="flex flex-col xl:ml-7 w-full items-center">
      <FeedbackToolbar
        :feedbacksCount="filteredFeedbacks.length"
        @sort="handleSort"
      />
      <FeedbackList
        v-if="false"
        :selectedFilter="selectedFilter"
        :filteredFeedbacks="filteredFeedbacks"
        :noFeedback="feedbacks.length === 0"
      />
      <div v-else class="w-28 m-96 md:m-24 text-purple-700">
        <Spinner :size="28" />
      </div>
    </div>
  </div>
</template>
