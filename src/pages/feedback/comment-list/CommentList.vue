<script setup lang="ts">
import Comment from './Comment.vue';

const dummyComments = [
  {
    id: '1',
    author: 'Johnny Walker',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, nisi id mollis pulvinar, ante turpis ultricies tortor, eget porttitor orci est sit amet urna. Aliquam non tortor rhoncus, congue turpis sit amet, aliquam sem.',
  },
  {
    id: '2',
    author: 'John Doe',
    text: 'Nam vitae cursus sapien. Nam eu dapibus orci. Nulla ultricies mi leo, eu ultrices turpis tempor ac.',
  },
];
</script>

<template>
  <div class="rounded-lg bg-white p-8">
    <div class="font-bold">2 Comments</div>

    <Comment v-for="comment in dummyComments" />
  </div>
</template>
