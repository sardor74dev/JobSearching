<script setup>
import { ref } from "vue";

const showMenu = ref(false)
</script>

<template>
    <div class="flex justify-center items-center bg-rose-500 w-full h-20">
        <button @click="showMenu = true" class="text-center p-4 w-fit h-fit bg-white">
            <p class="font-montserrat font-semibold text-base text-black md:text-xl">Фильтры</p>
        </button>
    </div>
    <div v-if="showMenu" class=" w-full h-full"></div>
</template>