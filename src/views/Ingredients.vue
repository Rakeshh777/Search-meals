<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredirents</h1>
        <div class="px-8">
            <input 
                v-model="keyword"
                placeholder="Search for Ingredirents" 
                type="text" 
                @change="searchMeals"
                class="w-full mb-3 rounded border-2 bg-white border-grey-200 focus:ring-orange-200 focu:border-orange-500"
            />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a href="#"
                    @click.prevent="openIngredient(ingredient)"
                    v-for="ingredient in computedIngredients"
                    :key="ingredient.idIngredient"
                    class="block bg-white rounded p-3 mb-3 shadow"
                >
                    <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRouter } from 'vue-router';

const router = useRouter();

const keyword = ref('');
const ingredirents = ref([]);
const computedIngredients = computed(() => {
    if(!computedIngredients) return ingredirents;
    return ingredirents.value.filter(ingredient => ingredient.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

function openIngredient(ingredient) {
    store.commit('setIngredient', ingredient);
    router.push({
        name: 'byIngredient',
        params: {
            ingredient: ingredient.strIngredient
        }
    })
}

onMounted(() => {
    axiosClient.get('list.php?i=list')
    .then(({data}) => {
        ingredirents.value = data.meals
    })
})
</script>

<style>

</style>