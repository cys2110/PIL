<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="min-h-screen dark:bg-zinc-800">
    <Header />
    <RouterView />
  </div>
</template>