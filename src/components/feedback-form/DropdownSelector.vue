<script setup lang="ts">
import { ref } from 'vue';

const { items, preSelectedItem } = defineProps<{
  items: string[];
  preSelectedItem: string;
}>();

const selectedItem = ref(preSelectedItem);
const dropdownVisibility = ref(false);

const selectItem = (item: string) => {
  emit('itemSelected', item);
  selectedItem.value = item;
  dropdownVisibility.value = false;
};

const emit = defineEmits<{
  (e: 'itemSelected', item: string): void;
}>();
</script>

<template>
  <!-- component -->
  <!-- 
    =======================================================================
    Name    :   Pure CSS Dropdown Menu
    Author  :   Surjith S M
    Twitter :   @surjithctly

    Get more components here 👉 https://web3templates.com/components

    Copyright © 2021
    =======================================================================
  -->

  <div class="flex flex-col">
    <div class="relative">
      <div
        class="flex justify-between w-full mt-4 px-5 py-3 bg-zinc-200 rounded-md cursor-pointer relative"
        @click="dropdownVisibility = !dropdownVisibility"
      >
        <span>{{ selectedItem }}</span>
        <div
          class="inline-flex items-center transition duration-150 ease-in-out"
          type="button"
        >
          <div
            class="ml-2 duration-300"
            :class="dropdownVisibility && 'rotate-180'"
          >
            <svg
              stroke="#4661E6"
              width="10"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1l4 4 4-4"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <transition name="list">
        <div
          v-show="dropdownVisibility"
          class="absolute left-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-2xl z-10"
          role="menu"
        >
          <div class="py-1">
            <div
              v-for="(item, index) in items"
              :key="index"
              :tabindex="index"
              class="text-gray-600 flex items-center justify-between w-full px-6 py-3 md:py-2 leading-5 cursor-pointer hover:text-purple-700"
              role="menuitem"
              @click="selectItem(item)"
            >
              <span>{{ item }}</span>
              <span v-if="item === selectedItem">
                <img src="../../assets/shared/icon-check.svg" />
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
