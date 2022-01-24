<script setup lang="ts">
import TitleCard from './TitleCard.vue'
import FiltersCard from './FiltersCard.vue'
import RoadmapCard from './RoadmapCard.vue'
</script>

<template>
  <div class="flex xl:flex-col xl:w-72 justify-between xl:justify-start">
    <TitleCard />
    <FiltersCard />
    <RoadmapCard />
  </div>
</template>
