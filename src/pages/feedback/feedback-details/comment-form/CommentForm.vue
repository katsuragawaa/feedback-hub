<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { writeCommentData } from '../../../../services/DatabaseService';
import { UserType } from '../../../../types';

const { feedbackId } = defineProps<{ feedbackId: string }>();
const user = ref({} as UserType);

onMounted(async () => {
  user.value = await getRandomUser();
});

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

  const comment = {
    id: uuidv4(),
    feedbackId: feedbackId,
    userId: user.value.id,
    avatar: user.value.avatar,
    author: user.value.name,
    email: user.value.email,
    content: removeEmptySpaces(inputComment.value),
  };

  writeCommentData(comment);
}

async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const { name, picture, email } = data.results[0];

  return {
    id: uuidv4(),
    name: `${name.first} ${name.last}`,
    avatar: picture.medium,
    email,
  };
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
