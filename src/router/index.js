import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import SearchByIngredient from '../views/SearchByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path: '/ingredient',
                name: 'ingredient',
                component: Ingredients,
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: SearchByIngredient
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router