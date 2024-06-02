<template>
    <a
        class="px-3 py-3 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors" 
        :href="href" 
        target="_blank"
    >
        <slot>YouTube</slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String,
})
</script>

<style>

</style>