<script setup lang="ts">
import TitleCard from './TitleCard.vue'
import FiltersCard from './FiltersCard.vue'
import RoadmapCard from './RoadmapCard.vue'
</script>

<template>
  <div
    class="flex xl:flex-col xl:w-96 justify-between xl:justify-start md:flex-col md:fixed md:w-full"
  >
    <TitleCard />
    <FiltersCard />
    <RoadmapCard />
  </div>
</template>
