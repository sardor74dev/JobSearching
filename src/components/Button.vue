<script setup>
defineProps(['msg', 'path'])
</script>

<template>
    <router-link class="flex justify-center lg:justify-start" :to="path">
        <button class="text-center w-fit h-fit p-4 bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300">
            <p class="font-montserrat font-semibold text-base md:text-xl">{{ msg }}</p>
        </button>
    </router-link>
</template>