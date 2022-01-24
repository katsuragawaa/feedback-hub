<script setup lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue'
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue';
</script>

<template>
  <div class="px-10 xl:px-36 py-14 bg-zinc-200 flex flex-col xl:flex-row">
    <MenuCards />
    <div class="h-10"></div>
    <FeedbackToolbar class="xl:ml-7" />
  </div>
</template>
