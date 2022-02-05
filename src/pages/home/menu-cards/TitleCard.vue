<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

function handleWindowResize() {
  sidebarOn.value = false;
  emit('close');
}

onMounted(() => {
  window.addEventListener('resize', handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize);
});

const emit = defineEmits<{
  (e: 'open'): void;
  (e: 'close'): void;
}>();

const sidebarOn = ref(false);
const toggleSidebar = () => {
  sidebarOn.value = !sidebarOn.value;
  sidebarOn.value ? emit('open') : emit('close');
};
</script>

<template>
  <div
    class="gradient-bg flex w-full items-center justify-between rounded-xl p-6 md:fixed md:z-20 md:w-screen md:rounded-none"
  >
    <div class="flex flex-col">
      <div class="my-10 md:m-0"></div>
      <div class="mb-1 text-lg font-bold text-white">Feedback Hub</div>
      <div class="text-sm text-neutral-100">Give us your insight</div>
    </div>
    <div class="relative hidden h-5 w-5 md:block" @click="toggleSidebar">
      <transition name="fade">
        <img
          v-if="sidebarOn"
          class="absolute h-full"
          src="../../../assets/shared/mobile/icon-close.svg"
        />
        <img
          v-else
          class="absolute h-full"
          src="../../../assets/shared/mobile/icon-hamburger.svg"
        />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
