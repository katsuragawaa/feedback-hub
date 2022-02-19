<script setup lang="ts">
import { CommentType } from '../../../../types';
import Comment from './Comment.vue';
import { ref, onMounted } from 'vue';

const comments = ref([] as CommentType[]);

const shouldDrawBorder = (index: number) => comments.value.length - 1 !== index;
</script>

<template>
  <div class="rounded-lg bg-white p-8">
    <div class="font-bold">2 Comments</div>

    <Comment
      v-for="(comment, index) in comments"
      :comment="comment"
      :key="comment.id"
      :drawBorder="shouldDrawBorder(index)"
    />
  </div>
</template>
