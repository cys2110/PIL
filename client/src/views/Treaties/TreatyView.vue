<script setup>
import treatyService from '@/services/treatyService';
import { onMounted, ref } from 'vue';
import Markdown from 'vue3-markdown-it'

const props = defineProps(['id'])
const treaty = ref(null)

onMounted(() => {
    treatyService.getTreatyById(props.id)
    .then(response => treaty.value = response.data)
    .catch(error => console.log(error))
})
</script>

<template>
    <div v-if="treaty">
        <div class="dark:text-white">{{ treaty.title }}</div>
        <div class="dark:text-white" v-if="treaty.sig_date">{{ treaty.sig_date }}</div>
        <div class="dark:text-white">{{ treaty.effective_date }}</div>
        <div class="dark:text-white">{{ treaty.location_signed }}</div>
        <div class="dark:text-white">{{ treaty.link }}</div>
        <div class="dark:text-white" v-if="treaty.cite">{{ treaty.cite }}</div>
        <Markdown class="dark:text-white" :source="treaty.text" :xhtmlOut="true" :toc="{level: [1, 2, 3, 4, 5]}" breaks />
    </div>
    <div v-else class="dark:text-white">Loading...</div>
</template>