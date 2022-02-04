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
const submitted = ref(false);

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
  if (disableAddButton.value || loading || submitted.value) return;
  submitted.value = true; // Avoid multiple submissions

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
    class="flex min-h-screen flex-col items-center bg-zinc-200 px-28 py-14 text-gray-600 md:px-6 xl:px-36"
  >
    <div class="min-w-[540px] max-w-3xl md:min-w-full">
      <GoBackButton textColor="gray-600" iconColor="#4661E6" />
      <div
        class="relative mt-16 flex flex-col rounded-xl bg-white px-11 pt-14 pb-11"
      >
        <div class="absolute left-11 -top-7 md:-top-5 md:w-10">
          <img
            src="../../assets/shared/icon-new-feedback.svg"
            alt="New feedback icon"
          />
        </div>
        <h1 class="mt-6 text-xl font-bold">{{ title }}</h1>

        <form @submit.prevent="saveFeedback">
          <div class="md:text-sm">
            <div class="mt-16">
              <div class="font-bold">Feedback Title: {{ feedbackTitle }}</div>
              <div class="mt-2 text-gray-600">
                Add a short, descriptive headline
              </div>
              <input
                v-model="feedbackTitle"
                class="mt-4 w-full rounded-md bg-zinc-200 px-5 py-3"
              />
            </div>

            <div class="mt-12">
              <div class="font-bold">Category</div>
              <div class="mt-2 text-gray-600">
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
              <div class="mt-2 text-gray-600">Change feature state</div>
              <DropdownSelector
                :items="['Suggestion', 'Planned', 'In-progress', 'Live']"
                :preSelectedItem="status"
                @itemSelected="handleStatusUpdate"
              />
            </div>

            <div class="mt-12">
              <div class="font-bold">Feedback Detail</div>
              <div class="mt-2 text-gray-600">
                Include any specific comments on what should be improved, added,
                etc.
              </div>
              <textarea
                maxlength="500"
                v-model="feedbackDetails"
                class="mt-4 w-full rounded-md bg-zinc-200 px-5 py-3"
              />
            </div>

            <div class="mt-12 mb-4 flex justify-end md:flex-col">
              <div
                class="rounded-lg py-3 px-6 text-center duration-500 hover:bg-gray-200 hover:text-black md:mb-4"
                @click="goBack"
              >
                Cancel
              </div>
              <div class="w-4"></div>
              <button
                class="flex justify-center rounded-lg bg-purple-600 py-3 px-6 text-white duration-500 hover:brightness-125"
                :class="{ 'cursor-not-allowed bg-gray-500': disableAddButton }"
                type="submit"
              >
                <span v-if="loading" class="text-white">
                  <Spinner :size="5" />
                </span>
                <span v-else>Add Feedback</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
