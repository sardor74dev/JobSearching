<script setup>
import { useVacanciesStore } from '../stores/VacanciesStore';

const vacanciesStore = useVacanciesStore()
</script>

<template>
    <div
        v-for="vacancy in vacanciesStore.vacancies"
        :key="vacancy"
        class="flex justify-between p-6 h-fit bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300 w-full font-montserrat font-semibold"
    >
        <router-link :to="`/vacancy-details/${vacancy.title}`">
            <div class="flex flex-col gap-6 font-montserrat font-semibold">
                <div class="flex flex-col gap-1 md:gap-2">
                    <h3 class="text-xl md:text-2xl text-[#FFE70C] font-montserrat font-semibold">{{ vacancy.title }}</h3>
                    <div class="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5">
                        <h3 class="text-lg md:text-lg font-montserrat font-medium">{{ vacancy.payment }}</h3>
                        <span class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 w-fit ring-1 ring-inset ring-gray-500/10">{{ vacancy.experience }}</span>
                    </div>
                </div>
                <div class="flex flex-col gap-1 md:gap-2">
                    <h3 class="text-base md:text-lg font-montserrat font-normal">{{ vacancy.company }}</h3>
                    <h3 class="text-base md:text-lg font-montserrat font-normal">{{ vacancy.city }}</h3>
                </div>
                <button class="text-center w-full md:w-[250px] h-12 md:h-[60px] bg-white">
                    <p class="font-montserrat font-semibold text-base text-black md:text-xl">Откликнуться</p>
                </button>
            </div>
        </router-link>
    </div>
</template>