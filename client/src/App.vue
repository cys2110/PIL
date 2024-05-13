<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen dark:bg-zinc-800">
    <Header />
    <RouterView :key="$route.fullPath" />
    <Footer />
  </div>
</template>