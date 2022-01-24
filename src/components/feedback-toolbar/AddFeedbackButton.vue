<script setup lang="ts">
import router from '../../router'

const newFeedback = () => router.push({ name: 'Home' })
</script>

<template>
  <button class="bg-purple-600 py-2 px-6 rounded-lg">
    <span class="text-sm font-bold" @click="newFeedback">Add Feedback</span>
  </button>
</template>