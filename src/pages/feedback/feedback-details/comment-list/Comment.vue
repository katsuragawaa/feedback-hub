<script setup lang="ts">
import { CommentType } from '../../../../types';

const { comment } = defineProps<{
  comment: CommentType;
  drawBorder: boolean;
}>();
</script>

<template>
  <div class="flex pt-8 text-sm" :class="{ 'border-b': drawBorder }">
    <div class="h-10 w-10 flex-none rounded-full bg-gray-100">
      <img
        :src="comment.avatar"
        alt="Avatar"
        class="h-full w-full rounded-full"
      />
    </div>
    <div class="ml-6 flex flex-col">
      <div class="flex justify-between">
        <div>
          <div class="font-bold">{{ comment.author }}</div>
          <div class="mt-1 text-xs">{{ comment.email }}</div>
        </div>
        <div class="font-bold">Reply</div>
      </div>
      <div class="mt-4" :class="{ 'mb-8': drawBorder }">
        {{ comment.content }}
      </div>
    </div>
  </div>
</template>
