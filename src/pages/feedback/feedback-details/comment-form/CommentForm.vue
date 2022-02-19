<script setup lang="ts">
import { ref, computed } from 'vue';

const inputComment = ref('');
const maxWordLength = 250;

const leftWordCount = computed(() => maxWordLength - inputComment.value.length);

const disablePostButton = computed(() => {
  const cleanInputComment = removeEmptySpaces(inputComment.value);
  return cleanInputComment.length === 0;
});

function removeEmptySpaces(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function handleCommentSubmit() {
  if (disablePostButton.value) return;
}
</script>

<template>
  <div class="mt-6 rounded-lg bg-white p-8">
    <form @submit.prevent="handleCommentSubmit">
      <div class="font-bold">Add Comment</div>

      <textarea
        :maxlength="maxWordLength"
        v-model="inputComment"
        class="mb-4 mt-8 w-full rounded-md bg-zinc-200 px-5 py-3 text-sm"
      />

      <div class="flex justify-between">
        <span class="text-xs">{{ leftWordCount }} characters left</span>
        <button
          class="rounded-lg bg-blue-600 py-3 px-6 text-xs text-white duration-300 hover:brightness-125 sm:text-sm"
          :class="{ 'cursor-not-allowed bg-gray-500': disablePostButton }"
          type="submit"
        >
          <span class="font-bold">Post Comment</span>
        </button>
      </div>
    </form>
  </div>
</template>
