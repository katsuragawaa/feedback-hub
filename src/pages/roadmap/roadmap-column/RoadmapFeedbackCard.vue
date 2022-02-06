<script setup lang="ts">
import { computed, ref } from 'vue';
import { Feedback } from '../../../types';

const { feedback } = defineProps<{
  feedback: Feedback;
}>();

const voted = ref(false);

const vote = () => {
  voted.value = !voted.value;
  voted.value ? feedback.votes++ : feedback.votes--;
};

const color = computed(() => {
  switch (feedback.status) {
    case 'Planned':
      return 'bg-orange-400';
    case 'In progress':
      return 'bg-purple-400';
    case 'Live':
      return 'bg-blue-400';
  }
});
</script>

<template>
  <div class="h-2 w-full rounded-t-lg" :class="color"></div>
  <div class="mb-4 flex flex-col rounded-b-lg bg-white p-6">
    <div class="flex flex-col items-start">
      <div>
        <div class="flex items-center text-sm text-gray-600">
          <div class="mr-2 flex w-4">
            <div class="h-2 w-2 rounded-full" :class="color"></div>
          </div>
          <div>
            {{ feedback.status }}
          </div>
        </div>

        <div
          class="mt-3 flex cursor-pointer flex-col duration-300 hover:text-blue-600"
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

        <div class="mt-4 flex items-center justify-between">
          <div
            class="flex h-fit w-fit cursor-pointer flex-row items-center justify-between rounded-lg bg-blue-600 py-2 px-4 duration-200"
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
            <div class="ml-3 text-sm font-bold">{{ feedback.votes }}</div>
          </div>

          <div class="flex items-center">
            <div class="min-w-max">
              <img class="w-5" src="@/assets/shared/icon-comments.svg" />
            </div>
            <div class="ml-3 text-lg font-bold">
              {{ feedback.comments?.length || 0 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
