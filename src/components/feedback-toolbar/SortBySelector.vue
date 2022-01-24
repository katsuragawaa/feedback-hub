<script setup lang="ts">
const sortOptions = {
  'upvotes-desc': { title: 'Most Upvotes', index: 0 },
  'upvotes-asc': { title: 'Least Upvotes', index: 1 },
  'comments-desc': { title: 'Most Comments', index: 2 },
  'comments-asc': { title: 'Least Comments', index: 3 },
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
      >
        <div>
          Sort by :
          <span class="font-bold ml-1">Most Upvotes</span>
        </div>
        <img src="../../assets/shared/white-arrow.svg" />
      </button>

      <div
        class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-80"
      >
        <div
          class="absolute left-0 w-52 mt-2 origin-top-right bg-white rounded-md shadow-lg"
          aria-labelledby="headlessui-menu-button-1"
          id="headlessui-menu-items-117"
          role="menu"
        >
          <div class="py-1">
            <div
              v-for="(option, id) in sortOptions"
              :key="id"
              href="javascript:void(0)"
              :tabindex="option.index"
              class="text-gray-700 flex items-center justify-between w-full px-4 py-3 text-sm leading-5 text-left cursor-pointer hover:text-purple-700"
              role="menuitem"
            >
              <span>{{ option.title }}</span>
              <span v-if="option.index === 2">
                <img src="../../assets/shared/icon-check.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>