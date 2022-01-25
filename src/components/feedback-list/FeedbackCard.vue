<script setup lang="ts">
const { feedback } = defineProps<{
  feedback: {
    id: string,
    title: string,
    description: string,
    type: string,
    votes: number,
    comments: number,
  },
}>()
</script>

<template>
  <div class="flex justify-between bg-white rounded-xl p-8 mb-4">
    <div class="flex">
      <div
        class="flex flex-col justify-between items-center h-14 w-11 py-3 px-2 bg-blue-600 bg-opacity-10 rounded-lg"
      >
        <img class="w-3" src="../../assets/shared/icon-arrow-up.svg" />
        <div class="font-bold text-sm">{{ feedback.votes }}</div>
      </div>
      <div class="flex flex-col mx-10 cursor-pointer hover:text-blue-600 duration-300">
        <div class="font-bold text-lg">{{ feedback.title }}</div>
        <div class="text-gray-500 mt-2 mb-4">{{ feedback.description }}</div>
        <div
          class="rounded-lg py-2 px-6 w-fit bg-blue-600 font-medium text-sm text-blue-700 bg-opacity-20"
        >{{ feedback.type }}</div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="min-w-max">
        <img class="w-5" src="../../assets/shared/icon-comments.svg" />
      </div>
      <div class="font-bold text-lg ml-3">{{ feedback.comments }}</div>
    </div>
  </div>
</template>