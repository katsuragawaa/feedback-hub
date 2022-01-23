<script setup lang="ts">
const filters = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
</script>

<template>
  <div class="w-full rounded-xl bg-white mx-4 lg:my-2 lg:mx-0">
    <div class="p-6 flex flex-wrap">
      <div v-for="filter in filters" class="rounded-lg py-1 px-3 mr-4 mb-2 w-fit">{{ filter }}</div>
    </div>
  </div>
</template>
