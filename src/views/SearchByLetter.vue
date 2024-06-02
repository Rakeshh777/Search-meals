<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">
            Meals for Letter
        </h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-8">
        <router-link 
        :to="{name : 'byLetter', params: {letter}}"  
        v-for="letter in letters" :key="letter"
        class="w-2 h-2 flex items-center justify-content hover:text-orange-500 transition-all hover:scale-150 "
        >
            {{ letter }}
        </router-link>
    </div>

    <Meals :meals="meals"/>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals =  computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchByLetter', route.params.letter)
})

</script>

<style>

</style>