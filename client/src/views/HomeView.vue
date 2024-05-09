<script setup>
import { onMounted, ref } from 'vue';
import Markdown from 'vue3-markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'
import TheWelcome from '../components/TheWelcome.vue'
import TreatyService from '../services/treaty'

const arrayOfText = ref([])
const text = ref('')
const plugins = [
  {
    plugin: MarkdownItAnchor
  }
]

onMounted(() => {
  TreatyService.getTreatyText()
  .then(response => {
    for (let i=0; i < response.data.length; i++) {
      arrayOfText.value.push(response.data[i].md_text)
      text.value = arrayOfText.value.join('<br> ')
      console.log(text.value)
    }
  })
  .catch(error => console.log(error))
})
</script>

<template>
  <main>
    <TheWelcome />
    <Markdown :source="text" :html="true" :xhtmlOut="true" class="text" :plugins="plugins" />
  </main>
</template>

<style scoped>
.text {
  white-space: pre-wrap;
}
</style>
