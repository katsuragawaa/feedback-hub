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
    class="w-full flex justify-between items-center p-6 rounded-xl gradient-bg md:rounded-none md:fixed md:z-20 md:w-screen"
  >
    <div class="flex flex-col">
      <div class="my-10 md:m-0"></div>
      <div class="font-bold text-lg text-white mb-1">Feedback Hub</div>
      <div class="text-sm text-neutral-100">Give us your insight</div>
    </div>
    <div class="h-5 w-5 relative hidden md:block" @click="toggleSidebar">
      <transition name="fade">
        <img
          v-if="sidebarOn"
          class="absolute h-full"
          src="../../assets/shared/mobile/icon-close.svg"
        />
        <img
          v-else
          class="absolute h-full"
          src="../../assets/shared/mobile/icon-hamburger.svg"
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
