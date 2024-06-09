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
    <div class="relative flex flex-col md:flex-row justify-between my-24 space-y-8 md:space-y-0">
        <input
            @input="vacanciesStore.searchByTitle"
            @keypress.enter="vacanciesStore.getSearchedVacancies"
            v-model="vacanciesStore.searchQuery"
            class="w-full md:w-[70vw] h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] px-6 text-[#BABABA] text-base font-montserrat outline-none" 
            placeholder="Профессия, должность или компания"
            type="text"
        >
        <transition name="fade">
            <ul v-if="vacanciesStore.searchedVacancies.length" class="absolute z-20 top-16 left-0 w-full md:w-[70vw] mt-2 bg-black shadow-lg">
                <li
                    v-for="vacancy in vacanciesStore.searchedVacancies"
                    :key="vacancy"
                    class="px-4 py-2 cursor-pointer hover:bg-[#FFE70C] hover:text-black"
                >
                    <router-link :to="`/vacancy-details/${vacancy.title}`">
                        {{ vacancy.title }}
                    </router-link>
                </li>
            </ul>
        </transition>
        <button 
            @click="vacanciesStore.getSearchedVacancies"
            class="text-center w-[50vw] lg:w-[250px] h-12 md:h-[60px] h-[46px] p-2 bg-black shadow-search-button hover:shadow-search-button-hover transition-shadow duration-300">
            <p class="font-montserrat font-semibold text-base md:text-xl">Поиск</p>
        </button>
    </div>
    <div class="flex flex-col lg:flex-row justify-between">
        <Sidebar class="flex flex-col-reverse lg:flex-row lg:w-1/4 mr-20 mb-4"/>
        <div class="flex flex-col w-full gap-6 md:gap-8 lg:gap-11 xl:gap-16 space-y-8 md:space-y-0">
            <ListOfVacancies />
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>