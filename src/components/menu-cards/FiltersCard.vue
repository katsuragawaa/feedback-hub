<script setup lang="ts">
import { ref } from 'vue';

const filters = {
  0: 'All',
  1: 'UI',
  2: 'UX',
  3: 'Enhancement',
  4: 'Bug',
  5: 'Feature',
};
const selectedFilter = ref(filters[0]);

const selectFilter = (filter: string) => {
  selectedFilter.value = filter;
};
</script>

<template>
  <div class="w-full rounded-xl bg-white mx-4 xl:my-4 xl:mx-0 md:m-0">
    <div class="p-6 h-full flex flex-wrap -mb-3">
      <div
        v-for="(filter, id) in filters"
        :key="id"
        :value="filter"
        @click="selectFilter(filter)"
        :class="
          selectedFilter === filter
            ? 'text-white bg-opacity-100'
            : 'text-blue-700  bg-opacity-20'
        "
        class="flex-1 rounded-lg py-2 px-4 lg:px-6 mr-2 mb-3 w-fit bg-blue-600 font-medium text-center text-sm hover:bg-opacity-40 duration-500 cursor-pointer"
      >{{ filter }}</div>
    </div>
  </div>
</template>
