<script setup lang="ts">
import { ref } from 'vue';

const { feedback } = defineProps<{
  feedback: {
    id: string;
    title: string;
    details: string;
    category: string;
    votes: number;
    comments: number;
  };
}>();

const voted = ref(false);

const vote = () => {
  voted.value = !voted.value;

  if (voted.value) {
    feedback.votes++;
  } else {
    feedback.votes--;
  }
};
</script>

<template>
  <div class="flex justify-between bg-white rounded-xl p-8 mb-4 md:relative">
    <div class="flex md:flex-col md:items-start">
      <div
        class="flex flex-col justify-between items-center h-14 w-11 py-3 px-2 bg-blue-600 rounded-lg cursor-pointer duration-200 md:order-1 md:flex-row md:h-fit md:w-fit md:py-2 md:px-4 md:mt-4"
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
        <div class="font-bold text-sm md:ml-3">{{ feedback.votes }}</div>
      </div>
      <div
        class="flex flex-col mx-10 cursor-pointer hover:text-blue-600 duration-300 md:m-0"
      >
        <div class="font-bold sm:text-lg text-base">{{ feedback.title }}</div>
        <div class="text-gray-500 mt-2 mb-4 sm:text-base text-sm">
          {{ feedback.details }}
        </div>
        <div
          class="rounded-lg py-2 px-6 w-fit bg-blue-600 font-medium text-sm text-blue-700 bg-opacity-20"
        >
          {{ feedback.category }}
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center md:absolute md:right-8 md:bottom-8"
    >
      <div class="min-w-max">
        <img class="w-5" src="../../assets/shared/icon-comments.svg" />
      </div>
      <div class="font-bold text-lg ml-3">{{ feedback.comments }}</div>
    </div>
  </div>
</template>
