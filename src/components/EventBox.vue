<script setup>
import 'tailwindcss/tailwind.css';

import EventsCard from './EventsCard.vue';
</script>

<template>
  <div class="flex flex-col w-full lg:flex-row">
    <EventsCard cardTitle="Pre" />
    <EventsCard cardTitle="Ing" />
    <EventsCard cardTitle="Fin" />
  </div>
</template>

