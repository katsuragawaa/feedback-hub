<script setup lang="ts">
import TitleCard from './TitleCard.vue'
import FiltersCard from './FiltersCard.vue'
import RoadmapCard from './RoadmapCard.vue'
import { ref } from 'vue'

const sidebarOn = ref(false)
const open = () => {
  sidebarOn.value = true
}
const close = () => {
  sidebarOn.value = false
}
</script>

<template>
  <div class="flex xl:flex-col xl:w-96 justify-between xl:justify-start">
    <TitleCard @open="open" @close="close" />
    <FiltersCard class="md:hidden" />
    <RoadmapCard class="md:hidden" />
  </div>
  <transition name="slide">
    <div
      v-if="sidebarOn"
      :class="sidebarOn ? 'show' : 'hide'"
      class="absolute flex justify-end bg-black bg-opacity-50 w-screen h-screen z-10 duration-500 transition"
    >
      <div class="mt-[100px] p-6 bg-gray-200 w-80">
        <FiltersCard />
        <RoadmapCard />
      </div>
    </div>
  </transition>
</template>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>