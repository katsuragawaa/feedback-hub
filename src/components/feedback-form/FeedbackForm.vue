<script setup lang="ts">
import GoBackButton from '../shared/GoBackButton.vue';
import CategorySelector from './CategorySelector.vue';
import { ref } from 'vue';

const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const feedbackTitle = ref('');
const category = ref('Feature');
const feedbackDetails = ref('');

function handleCategorySelection(selectedCategory: string) {
  category.value = selectedCategory;
}
</script>

<template>
  <div
    class="px-28 py-14 xl:px-36 text-gray-600 md:px-6 min-h-screen bg-zinc-200 flex flex-col items-center"
  >
    <div class="max-w-3xl min-w-[540px] md:min-w-full">
      <GoBackButton textColor="gray-600" iconColor="#4661E6" />
      <div
        class="flex flex-col bg-white rounded-xl px-11 pt-14 pb-11 mt-16 relative"
      >
        <div class="absolute left-11 -top-7 md:-top-5 md:w-10">
          <img
            src="../../assets/shared/icon-new-feedback.svg"
            alt="New feedback icon"
          />
        </div>
        <h1 class="text-xl mt-6 font-bold">{{ title }}</h1>

        <div class="md:text-sm">
          <div class="mt-16">
            <div class="font-bold">Feedback Title: {{ feedbackTitle }}</div>
            <div class="text-gray-600 mt-2">
              Add a short, descriptive headline
            </div>
            <input
              v-model="feedbackTitle"
              class="w-full mt-4 px-5 py-3 bg-zinc-200 rounded-md"
            />
          </div>

          <div class="mt-12">
            <CategorySelector
              :category="category"
              @categorySelected="handleCategorySelection"
            />
          </div>

          <div class="mt-12">
            <div class="font-bold">Feedback Detail</div>
            <div class="text-gray-600 mt-2">
              Include any specific comments on what should be improved, added,
              etc.
            </div>
            <textarea
              v-model="feedbackDetails"
              class="w-full mt-4 px-5 py-3 bg-zinc-200 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
