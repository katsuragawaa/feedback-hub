<script setup lang="ts">
import MenuCards from '../components/menu-cards/MenuCards.vue'
import FeedbackToolbar from '../components/feedback-toolbar/FeedbackToolbar.vue';
</script>

<template>
  <div class="px-10 lg:px-36 py-14 h-screen bg-zinc-200 flex flex-col lg:flex-row">
    <MenuCards />
    <div class="h-10"></div>
    <FeedbackToolbar />
  </div>
</template>
