<script setup lang="ts">
import { ref } from 'vue';
import { SortBy } from '../../../types';

const emit = defineEmits<{
  (e: 'sort', option: SortBy): void;
}>();

const sortOptions = [
  { title: 'Most Upvotes', index: 0, key: 'votes', order: 'desc' },
  { title: 'Least Upvotes', index: 1, key: 'votes', order: 'asc' },
  { title: 'Most Comments', index: 2, key: 'comments', order: 'desc' },
  { title: 'Least Comments', index: 3, key: 'comments', order: 'asc' },
];

const selectedOption = ref(sortOptions[0]);
const dropdownVisibility = ref(false);

const selectOption = (option: SortBy) => {
  emit('sort', option);
  selectedOption.value = option;
  dropdownVisibility.value = false;
};
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

  <div class="flex items-center justify-center">
    <div class="relative inline-block text-left">
      <button
        class="inline-flex w-full items-center justify-center text-gray-300 transition duration-150 ease-in-out hover:brightness-200 md:text-gray-600 md:hover:brightness-0"
        type="button"
        @click="dropdownVisibility = !dropdownVisibility"
      >
        <div>
          Sort by :
          <span class="ml-1 font-bold">{{ selectedOption.title }}</span>
        </div>
        <div
          class="ml-2 duration-300"
          :class="dropdownVisibility && 'rotate-180'"
        >
          <svg
            class="stroke-current"
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
      </button>

      <transition name="list">
        <div
          v-show="dropdownVisibility"
          class="absolute left-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-xl"
          role="menu"
        >
          <div class="py-1">
            <div
              v-for="option in sortOptions"
              :key="option.key"
              :tabindex="option.index"
              class="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm leading-5 text-gray-700 hover:text-purple-700"
              role="menuitem"
              @click="selectOption(option)"
            >
              <span>{{ option.title }}</span>
              <span v-if="option.index === selectedOption.index">
                <img src="@/assets/shared/icon-check.svg" />
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
