<script setup lang="ts">
// TODO add roadmap page and route
const roadmap = {
  'Planned': { 'id': '0', 'color': 'bg-orange-400', 'count': 3 },
  'In progress': { 'id': '1', 'color': 'bg-purple-400', 'count': 5 },
  'Live': { 'id': '2', 'color': 'bg-sky-400', 'count': 1 },
}
</script>

<template>
  <div class="w-full rounded-xl bg-white">
    <div class="p-6 h-full flex flex-col">
      <div class="font-bold text-lg flex justify-between items-baseline mb-4">
        <span class="font-bold text-base sm:text-lg text-gray-700">Roadmap</span>
        <router-link
          :to="{ name: 'Roadmap' }"
          class="underline text-xs sm:text-sm text-blue-600 hover:text-opacity-60"
        >View</router-link>
      </div>
      <div class="flex flex-col h-full text-gray-500">
        <div
          v-for="(value, status) in roadmap"
          :key="value.id"
          class="flex flex-grow items-center mt-1 text-sm sm:text-base"
        >
          <div class="w-4 flex mr-2">
            <div class="w-2 h-2 rounded-full" :class="value.color"></div>
          </div>
          <div class="flex-1">{{ status }}</div>
          <div class="w-4 text-center font-bold">{{ value.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
