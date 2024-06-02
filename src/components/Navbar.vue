<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link 
      :to="{name: 'home'}" 
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link 
        :to="{name: 'byName'}" 
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
          Search By Meals
        </router-link>
        <router-link 
        :to="{name: 'byLetter'}" 
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
          Search By Letters
        </router-link>
        <router-link 
        :to="{name: 'ingredient'}" 
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
          Search by ingredients
        </router-link>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>