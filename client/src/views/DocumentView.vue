<script setup>
import documentService from '@/services/documentService';
import { onMounted, ref } from 'vue';
import Markdown from 'vue3-markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

const plugins = [
    {
        plugin: markdownItAttrs
    }
]
const props = defineProps(['court', 'caseId', 'documentId'])
const document = ref(null)

onMounted(() => {
    documentService.getDocumentById(props.documentId)
    .then(response => document.value = response.data)
    .catch(error => console.log(error))
})
</script>

<template>
    <div v-if="document" class="m-3">
        <Markdown class="dark:text-white" :source="document.text" :xhtmlOut="true" :toc="{level: [1, 2, 3, 4]}" breaks :html="true" :plugins="plugins" />
    </div>
    <div v-else>Loading...</div>
</template>