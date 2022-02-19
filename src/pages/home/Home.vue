<script lang="ts">
import { FeedbackType, SortByType } from '../../types';

import MenuCards from './menu-cards/MenuCards.vue';
import FeedbackToolbar from './feedback-toolbar/FeedbackToolbar.vue';
import FeedbackList from './feedback-list/FeedbackList.vue';
import Spinner from '@/components/Spinner.vue';

import { readAllFeedbackData } from '../../services/DatabaseService';
import { defineComponent } from 'vue';
import _ from 'lodash';

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
      feedbacks: [] as FeedbackType[],
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    const fetchedFeedbacksObject = await readAllFeedbackData();
    this.feedbacks = Object.values(fetchedFeedbacksObject);
    this.loading = false;
  },
  methods: {
    handleFilterSelection(filter: string) {
      this.selectedFilter = filter;
    },
    handleSort(option: SortByType) {
      const order = option.order === 'asc' ? 'asc' : 'desc'; // TS won't let me just use option.order
      this.feedbacks = _.orderBy(this.feedbacks, [option.key], [order]);
    },
  },
  computed: {
    filteredFeedbacks(): FeedbackType[] {
      const filter = this.selectedFilter || 'All';
      if (filter === 'All') return this.feedbacks;

      return this.feedbacks.filter(feedback => feedback.category === filter);
    },
  },
});
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-zinc-200 px-10 py-14 md:p-0 xl:flex-row xl:px-36"
  >
    <MenuCards @filterSelected="handleFilterSelection" />
    <div class="h-10 md:hidden"></div>
    <div class="flex w-full flex-col xl:ml-7">
      <FeedbackToolbar
        :feedbacksCount="filteredFeedbacks.length"
        @sort="handleSort"
      />
      <FeedbackList
        v-if="!loading"
        :selectedFilter="selectedFilter"
        :filteredFeedbacks="filteredFeedbacks"
        :noFeedback="feedbacks.length === 0"
      />
      <div v-else class="my-96 mx-auto w-28 text-purple-700">
        <Spinner :size="28" />
      </div>
    </div>
  </div>
</template>
