<script setup lang="ts">
import RoadmapToolbar from '../components/roadmap-toolbar/RoadmapToolbar.vue';
import RoadmapColumn from '../components/roadmap-column/RoadmapColumn.vue';
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-zinc-200 px-10 py-14 md:p-0 xl:px-36"
  >
    <RoadmapToolbar />

    <div class="mt-8 flex justify-between">
      <RoadmapColumn />
      <RoadmapColumn class="mx-10 md:mx-0" />
      <RoadmapColumn />
    </div>
  </div>
</template>
