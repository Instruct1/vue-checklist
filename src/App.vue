<script setup>
import 'tailwindcss/tailwind.css';

import TaskBox from './components/TaskBox.vue';
import EventBox from './components/EventBox.vue';
</script>

<template>
  <div class="flex flex-col w-full lg:flex-row">
    <TaskBox />

    <div class="divider lg:divider-horizontal">OR</div>

    <EventBox />
  </div>
</template>
