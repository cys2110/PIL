<script setup>
import Markdown from 'vue3-markdown-it'

const text = `
[[toc]]
# Heading 1
Why are headings not working anymore?
## Give me a TOC
###### Heading 6`
</script>

<template>
  <main>
    <Markdown :source="text" :html="true" :xhtmlOut="true" :toc="{level: [1, 2, 3, 4, 5]}" />
  </main>
</template>
