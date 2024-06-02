<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">
            Search Meals by Name
        </h1>
    </div>
    <div class="px-8 pb-3">
        <input 
        v-model="keyword"
        placeholder="Search for meals" 
        type="text" 
        @change="searchMeals"
        class="w-full rounded border-2 border-grey-200 focus:ring-orange-500 focus:border-orange-500"/>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if(keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    } else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
   keyword.value = route.params.name
   if(keyword.value) {
       searchMeals()
   }
})

</script>

<style>

</style>