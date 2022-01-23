<script setup lang="ts">
import TitleCard from './components/TitleCard.vue'
</script>

<template>
  <div class="px-10 py-12 h-screen bg-zinc-200 flex flex-col lg:flex-row">
    <div class="flex lg:flex-col lg:w-72 justify-between lg:justify-start">
      <TitleCard />
      <TitleCard />
      <TitleCard />
      <!-- <FiltersCard /> -->
      <!-- <RoadmapCard /> -->
    </div>
    <div class="flex w-full h-full bg-white"></div>
  </div>
</template>
