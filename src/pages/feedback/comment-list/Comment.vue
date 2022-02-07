<script setup lang="ts">
import { Comment } from '../../../types';

const { comment } = defineProps<{
  comment: Comment;
  drawBorder: boolean;
}>();
</script>

<template>
  <div class="flex pt-8 text-sm" :class="{ 'border-b': drawBorder }">
    <div class="h-10 w-10 flex-none rounded-full bg-slate-400"></div>
    <div class="ml-6 flex flex-col">
      <div class="flex items-center justify-between font-bold">
        <div>{{ comment.author }}</div>
        <div>Reply</div>
      </div>
      <div class="mt-4" :class="{ 'mb-8': drawBorder }">
        {{ comment.content }}
      </div>
    </div>
  </div>
</template>
