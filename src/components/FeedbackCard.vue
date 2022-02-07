<script setup lang="ts">
import { ref } from 'vue';
import { Feedback } from '../types';

const { feedback, clickable } = defineProps({
  feedback: {
    type: Object,
    required: true,
  },
  clickable: {
    type: Boolean,
    default: true,
  },
});

const voted = ref(false);

const vote = () => {
  voted.value = !voted.value;

  if (voted.value) {
    feedback.votesCount++;
  } else {
    feedback.votesCount--;
  }
};
</script>

<template>
  <div class="mb-4 flex justify-between rounded-xl bg-white p-8 md:relative">
    <div class="flex md:flex-col md:items-start">
      <div
        class="flex h-14 w-11 cursor-pointer flex-col items-center justify-between rounded-lg bg-blue-600 py-3 px-2 duration-200 md:order-1 md:mt-4 md:h-fit md:w-fit md:flex-row md:py-2 md:px-4"
        :class="voted ? 'bg-opacity-100 text-white' : 'bg-opacity-10'"
        @click="vote"
      >
        <svg
          class="duration-500"
          :class="{ 'rotate-180': voted }"
          width="10"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6l4-4 4 4"
            :stroke="voted ? 'white' : 'rgb(37 99 235)'"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
        <div class="text-sm font-bold md:ml-3">{{ feedback.votesCount }}</div>
      </div>
      <div
        class="mx-10 flex flex-col duration-300 md:m-0"
        :class="{ 'cursor-pointer hover:text-blue-600': clickable }"
      >
        <div class="text-base font-bold sm:text-lg">{{ feedback.title }}</div>
        <div class="mt-2 mb-4 text-sm text-gray-500 sm:text-base">
          {{ feedback.details }}
        </div>
        <div
          class="w-fit rounded-lg bg-blue-600 bg-opacity-20 py-2 px-6 text-sm font-medium text-blue-700"
        >
          {{ feedback.category }}
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center md:absolute md:right-8 md:bottom-8"
    >
      <div class="min-w-max">
        <img class="w-5" src="@/assets/shared/icon-comments.svg" />
      </div>
      <div class="ml-3 text-lg font-bold">
        {{ feedback.commentsCount }}
      </div>
    </div>
  </div>
</template>
