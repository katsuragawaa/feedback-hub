<script setup lang="ts">
import { Feedback } from '../../../types';

const { feedback } = defineProps<{
  feedback: Feedback;
}>();
</script>

<template>
  <div class="h-2 w-full rounded-t-lg bg-purple-600"></div>
  <div class="mb-4 flex flex-col rounded-b-lg bg-white p-6">
    <div>Planned</div>
    <div>More comprehensive reports</div>
    <div>It would be great to see a more detailed breakdown of solutions.</div>
    <div>Feature</div>
    {{ feedback }}
  </div>
</template>
