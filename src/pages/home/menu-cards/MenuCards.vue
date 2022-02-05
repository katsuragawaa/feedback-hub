<script setup lang="ts">
import TitleCard from './TitleCard.vue';
import FiltersCard from './FiltersCard.vue';
import RoadmapCard from './RoadmapCard.vue';
import { ref } from 'vue';

const sidebarOn = ref(false);

const open = () => {
  sidebarOn.value = true;
};
const close = () => {
  sidebarOn.value = false;
};

function handleFilterSelection(filter: string) {
  emit('filterSelected', filter);
}

const emit = defineEmits<{
  (e: 'filterSelected', filter: string): void;
}>();
</script>

<template>
  <div class="flex justify-between xl:w-96 xl:flex-col xl:justify-start">
    <TitleCard @open="open" @close="close" />
    <FiltersCard class="md:hidden" @filterSelected="handleFilterSelection" />
    <RoadmapCard class="md:hidden" />
  </div>
  <transition name="slide">
    <div
      v-if="sidebarOn"
      class="absolute z-10 flex h-screen w-screen justify-end bg-black bg-opacity-50"
    >
      <div class="mt-[100px] w-80 bg-gray-200 p-6">
        <FiltersCard />
        <RoadmapCard />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
