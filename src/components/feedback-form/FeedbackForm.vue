<script setup lang="ts">
import GoBackButton from '../shared/GoBackButton.vue';
import DropdownSelector from './DropdownSelector.vue';
import { v4 as uuidv4 } from 'uuid';
import { computed, ref } from 'vue';
import router from '../../router';
import Spinner from '../shared/Spinner.vue';

type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
};

const { title, isEdit, loading } = defineProps<{
  title: string;
  isEdit?: boolean;
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: 'saveFeedback', feedback: FeedbackFormData): void;
}>();

const feedbackTitle = ref('');
const category = ref('Feature');
const status = ref('Suggestion');
const feedbackDetails = ref('');

const disableAddButton = computed(() => {
  const cleanTitle = removeEmptySpaces(feedbackTitle.value);
  const cleanDetails = removeEmptySpaces(feedbackDetails.value);
  return cleanTitle.length === 0 || cleanDetails.length === 0;
});

function handleCategorySelection(selectedCategory: string) {
  category.value = selectedCategory;
}

function handleStatusUpdate(selectedStatus: string) {
  status.value = selectedStatus;
}

function removeEmptySpaces(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function goBack() {
  router.back();
}

function saveFeedback() {
  if (disableAddButton.value || loading) return;

  const feedback = {
    id: uuidv4(), // TODO: don't change if is a edit
    title: removeEmptySpaces(feedbackTitle.value),
    category: category.value,
    status: status.value,
    details: removeEmptySpaces(feedbackDetails.value),
  };

  emit('saveFeedback', feedback);
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
            <div class="font-bold">Category</div>
            <div class="text-gray-600 mt-2">
              Choose a category for your feedback
            </div>
            <DropdownSelector
              :items="['Feature', 'UI', 'UX', 'Enhancement', 'Bug']"
              :preSelectedItem="category"
              @itemSelected="handleCategorySelection"
            />
          </div>

          <div v-if="isEdit" class="mt-12">
            <div class="font-bold">Update Status</div>
            <div class="text-gray-600 mt-2">Change feature state</div>
            <DropdownSelector
              :items="['Suggestion', 'Planned', 'In-progress', 'Live']"
              :preSelectedItem="status"
              @itemSelected="handleStatusUpdate"
            />
          </div>

          <div class="mt-12">
            <div class="font-bold">Feedback Detail</div>
            <div class="text-gray-600 mt-2">
              Include any specific comments on what should be improved, added,
              etc.
            </div>
            <textarea
              maxlength="500"
              v-model="feedbackDetails"
              class="w-full mt-4 px-5 py-3 bg-zinc-200 rounded-md"
            />
          </div>

          <div class="flex justify-end mt-12 mb-4 md:flex-col">
            <button
              class="py-3 px-6 rounded-lg hover:bg-gray-200 hover:text-black duration-500"
              @click="goBack"
            >
              Cancel
            </button>
            <div class="w-4"></div>
            <button
              class="bg-purple-600 text-white py-3 px-6 rounded-lg hover:brightness-125 duration-500 flex justify-center"
              :class="{ 'cursor-not-allowed bg-gray-500': disableAddButton }"
              @click="saveFeedback"
            >
              <span v-if="loading" class="text-white">
                <Spinner :size="5" />
              </span>
              <span v-else>Add Feedback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
