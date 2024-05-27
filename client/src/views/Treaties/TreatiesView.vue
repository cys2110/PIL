<script setup>
import treatyService from '@/services/treatyService';
import { onMounted, ref } from 'vue';

const treaties = ref([])

onMounted(() => {
    treatyService.getAllTreaties()
    .then(response => treaties.value = response.data)
    .catch(error => console.log(error))
})
</script>

<template>
    <div v-if="treaties.length > 0">
        <div class="dark:text-white" v-for="treaty in treaties" :key="treaty.id">
            <router-link :to="{name: 'Treaty', params: {id: treaty.id}}">{{ treaty.title }}</router-link>
        </div>
    </div>
    <div v-else class="dark:text-white">Loading...</div>
</template>