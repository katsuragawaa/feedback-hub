<script setup lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue'
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue';
import FeedbackList from '../components/feedback-list/FeedbackList.vue';
import { ref } from 'vue';

const selectedFilter = ref('')

function handleFilterSelection(filter: string) {
  selectedFilter.value = filter
}

</script>

<template>
  <div class="px-10 xl:px-36 py-14 md:p-0 min-h-screen bg-zinc-200 flex flex-col xl:flex-row">
    <MenuCards @filterSelected="handleFilterSelection" />
    <div class="h-10 md:hidden"></div>
    <div class="flex flex-col xl:ml-7 w-full">
      <FeedbackToolbar />
      <FeedbackList :selectedFilter="selectedFilter" />
    </div>
  </div>
</template>
