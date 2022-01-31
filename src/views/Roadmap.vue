<script setup lang="ts">
import RoadmapToolbar from '../components/roadmap-toolbar/RoadmapToolbar.vue';
import RoadmapColumn from '../components/roadmap-column/RoadmapColumn.vue';
</script>

<template>
  <div
    class="px-10 py-14 xl:px-36 md:p-0 min-h-screen bg-zinc-200 flex flex-col"
  >
    <RoadmapToolbar />

    <div class="flex justify-between mt-8">
      <RoadmapColumn />
      <RoadmapColumn class="mx-10 md:mx-0" />
      <RoadmapColumn />
    </div>
  </div>
</template>
