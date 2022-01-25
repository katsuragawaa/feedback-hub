<script setup lang="ts">
import { ref } from 'vue';

const navbarOn = ref(false);
const toggleNavbar = () => navbarOn.value = !navbarOn.value;
</script>

<template>
  <div
    class="w-full flex justify-between items-center p-6 rounded-xl gradient-bg md:rounded-none md:fixed md:z-10"
  >
    <div class="flex flex-col">
      <div class="my-10 md:m-0"></div>
      <div class="font-bold text-lg text-white mb-1">Feedback Hub</div>
      <div class="text-sm text-neutral-100">Give us your insight</div>
    </div>
    <div class="h-5 w-5 relative hidden md:block" @click="toggleNavbar">
      <transition name="no-mode-fade">
        <img
          v-if="navbarOn"
          class="absolute h-full"
          src="../../assets/shared/mobile/icon-hamburger.svg"
        />
        <img v-else class="absolute h-full" src="../../assets/shared/mobile/icon-close.svg" />
      </transition>
    </div>
  </div>
</template>

<style>
.no-mode-fade-enter-active {
  transition: opacity 0.5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}
</style>
