<script setup lang="ts">
import { ref } from 'vue'

type SortBy = {
  title: string;
  index: number;
}

const sortOptions = {
  'upvotes-desc': { title: 'Most Upvotes', index: 0 },
  'upvotes-asc': { title: 'Least Upvotes', index: 1 },
  'comments-desc': { title: 'Most Comments', index: 2 },
  'comments-asc': { title: 'Least Comments', index: 3 },
}

const selectedOption = ref(sortOptions['upvotes-desc'])
const dropdownVisibility = ref(false)

const openDropdown = () => {
  dropdownVisibility.value = true
}

const selectOption = (option: SortBy) => {
  selectedOption.value = option
  dropdownVisibility.value = false
}
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
    <div class="relative inline-block text-left dropdown">
      <button
        class="inline-flex items-center justify-center w-full text-sm transition duration-150 ease-in-out hover:text-neutral-300"
        type="button"
        @click="dropdownVisibility = !dropdownVisibility"
      >
        <div>
          Sort by :
          <span class="font-bold ml-1">{{ selectedOption.title }}</span>
        </div>
        <img src="../../assets/shared/white-arrow.svg" />
      </button>

      <transition name="list">
        <div
          v-show="dropdownVisibility"
          class="absolute left-0 w-52 mt-2 origin-top-right bg-white rounded-md shadow-lg"
          role="menu"
        >
          <div class="py-1">
            <div
              v-for="(option, id) in sortOptions"
              :key="id"
              :tabindex="option.index"
              class="text-gray-700 flex items-center justify-between w-full px-4 py-3 text-sm leading-5 text-left cursor-pointer hover:text-purple-700"
              role="menuitem"
              @click="selectOption(option)"
            >
              <span>{{ option.title }}</span>
              <span v-if="option.index === selectedOption.index">
                <img src="../../assets/shared/icon-check.svg" />
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
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