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
const selectedFilter = ref('All');

const selectFilter = (filter: string) => {
  emit('filterSelected', filter);
  selectedFilter.value = filter;
};

const emit = defineEmits<{
  (e: 'filterSelected', filter: string): void;
}>();
</script>

<template>
  <div class="mx-4 w-full rounded-xl bg-white md:m-0 md:mb-6 xl:my-4 xl:mx-0">
    <div class="-mb-3 flex h-full flex-wrap p-6">
      <div
        v-for="(filter, id) in filters"
        :key="id"
        :value="filter"
        @click="selectFilter(filter)"
        :class="
          selectedFilter === filter
            ? 'bg-opacity-100 text-white'
            : 'bg-opacity-20  text-blue-700'
        "
        class="mr-2 mb-3 w-fit flex-1 cursor-pointer rounded-lg bg-blue-600 py-2 px-4 text-center text-xs font-medium duration-500 hover:bg-opacity-40 sm:text-sm lg:px-6"
      >
        {{ filter }}
      </div>
    </div>
  </div>
</template>
