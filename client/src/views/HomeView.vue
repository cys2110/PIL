<script setup>
import Treaty from '@/services/Treaty';
import { onMounted, ref } from 'vue';
import Markdown from 'vue3-markdown-it'

const text = ref('')

onMounted(() => {
  Treaty.getTreatyText()
  .then(response => {
    text.value = response.data.md_text
  })
  .catch(error => console.log(error))
})
</script>

<template>
  <main>
    <Markdown :source="text" :html="true" :xhtmlOut="true" :toc="{level: [1, 2, 3, 4, 5]}" breaks />
  </main>
</template>
