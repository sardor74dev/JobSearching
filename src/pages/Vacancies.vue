<script setup>
import { onMounted, ref } from 'vue'
import { useVacanciesStore } from '../stores/VacanciesStore'
import Button from '../components/Button.vue'
import Sidebar from '../components/Sidebar.vue'
import ListOfVacancies from '../components/ListOfVacancies.vue'

const vacanciesStore = useVacanciesStore()

onMounted(async() => {
    await vacanciesStore.fetchVacancies()
})
</script>

<template>
    <div class="flex flex-col md:flex-row justify-between my-24 space-y-8 md:space-y-0">
        <input
            class="w-full md:w-[70vw] h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] px-6 text-[#BABABA] text-base font-montserrat outline-none" 
            placeholder="Профессия, должность или компания"
            type="text"
        >
        <button class="text-center w-[50vw] lg:w-[250px] h-12 md:h-[60px] h-[46px] p-2 bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300">
            <p class="font-montserrat font-semibold text-base md:text-xl">Поиск</p>
        </button>
    </div>
    <div class="flex flex-col md:flex-row justify-between">
        <Sidebar class="flex flex-col-reverse md:flex-row md:w-1/4 mr-20"/>
        <div class="flex flex-col w-full gap-6 md:gap-8 lg:gap-11 xl:gap-16 space-y-8 md:space-y-0">
            <ListOfVacancies />
        </div>
    </div>
    <!-- <HiddenSidebar class="fixed bottom-0 left-0 right-0 block lg:hidden" /> -->
</template>