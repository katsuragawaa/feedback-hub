<script setup lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue'
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue';
import FeedbackList from '../components/feedback-list/FeedbackList.vue';
</script>

<template>
  <div class="px-10 xl:px-36 py-14 md:p-0 min-h-screen bg-zinc-200 flex flex-col xl:flex-row">
    <MenuCards />
    <div class="h-10 md:hidden"></div>
    <div class="flex flex-col xl:ml-7 w-full">
      <FeedbackToolbar />
      <FeedbackList />
    </div>
  </div>
</template>
