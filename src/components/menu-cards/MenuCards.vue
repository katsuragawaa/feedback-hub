<script setup lang="ts">
import TitleCard from './TitleCard.vue'
import FiltersCard from './FiltersCard.vue'
import RoadmapCard from './RoadmapCard.vue'
</script>

<template>
  <div class="px-10 py-12 h-screen bg-zinc-200 flex flex-col lg:flex-row">
    <div class="flex lg:flex-col lg:w-72 justify-between lg:justify-start">
      <TitleCard />
      <FiltersCard />
      <RoadmapCard />
    </div>
  </div>
</template>
