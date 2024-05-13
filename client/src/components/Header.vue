<script setup>
import courtService from '@/services/courtService';
import { onMounted, ref } from 'vue';

const courts = ref([])

onMounted(() => {
    courtService.getAllCourts()
    .then(response => {
        courts.value = response.data
        console.log(response.data)
    })
    .catch(error => console.log(error))
})
</script>

<template>
    <div class="bg-slate-400 py-5 px-10 flex justify-between">
        <div class="text-3xl">PILDatabase</div>
        <div class="space-x-3">
            <v-btn
                color="black"
                rounded="pill"
                :to="{name: 'Treaties'}"
            >
                Treaties
            </v-btn>
            <v-menu
                open-on-hover
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="black"
                        v-bind="props"
                        rounded="pill"
                    >
                        Courts
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(court) in courts"
                    :key="court.id"
                    >
                        <v-list-item-title>
                            <router-link :to="{name: 'Court', params: {court: court.name}}">{{ court.name }}</router-link>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>