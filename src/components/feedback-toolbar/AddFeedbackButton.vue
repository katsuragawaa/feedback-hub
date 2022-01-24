<script setup lang="ts">
import router from '../../router'

const newFeedback = () => router.push({ name: 'NewFeedback' })
</script>

<template>
  <button class="bg-purple-600 py-2 px-6 rounded-lg" @click="newFeedback">
    <span class="text-sm font-bold">Add Feedback</span>
  </button>
</template>