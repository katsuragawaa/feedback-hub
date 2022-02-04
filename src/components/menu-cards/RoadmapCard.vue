<script setup lang="ts">
// TODO add roadmap page and route
const roadmap = {
  Planned: { id: '0', color: 'bg-orange-400', count: 3 },
  'In progress': { id: '1', color: 'bg-purple-400', count: 5 },
  Live: { id: '2', color: 'bg-sky-400', count: 1 },
};
</script>

<template>
  <div class="w-full rounded-xl bg-white">
    <div class="flex h-full flex-col p-6">
      <div class="mb-4 flex items-baseline justify-between text-lg font-bold">
        <span class="text-base font-bold text-gray-700 sm:text-lg"
          >Roadmap</span
        >
        <router-link
          :to="{ name: 'Roadmap' }"
          class="text-xs text-blue-600 underline hover:text-opacity-60 sm:text-sm"
          >View</router-link
        >
      </div>
      <div class="flex h-full flex-col text-gray-500">
        <div
          v-for="(value, status) in roadmap"
          :key="value.id"
          class="mt-1 flex flex-grow items-center text-sm sm:text-base"
        >
          <div class="mr-2 flex w-4">
            <div class="h-2 w-2 rounded-full" :class="value.color"></div>
          </div>
          <div class="flex-1">{{ status }}</div>
          <div class="w-4 text-center font-bold">{{ value.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
