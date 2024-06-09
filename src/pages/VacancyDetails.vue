<script setup>
import { ref, watch, onMounted } from 'vue';
import { useVacanciesStore } from '../stores/VacanciesStore';
import { useRoute } from 'vue-router'

const vacanciesStore = useVacanciesStore()
const vacancy = ref({})

const route = useRoute()

const fetchVacancyDetails = () => {
    const vacancyId = route.params.id
    const fetchedVacancy = vacanciesStore.vacancies.find((v) => v.title === vacancyId)
    vacancy.value = { ...fetchedVacancy }
}

watch(() => route.params.id, () => {
    fetchVacancyDetails()
})

onMounted(async() => {
    await vacanciesStore.fetchVacancies()
    fetchVacancyDetails()
})
</script>

<template>
    <div class="w-full flex items-center justify-center">
        <div
            class="flex justify-between p-6 h-fit bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300 w-[70vw] font-montserrat font-semibold"
        >
            <div class="flex flex-col gap-6 font-montserrat font-semibold">
                <div class="flex gap-16">
                    <div class="flex flex-col">
                        <h3 class="text-xl md:text-2xl text-[#FFE70C] font-montserrat font-semibold">{{ vacancy.title }}</h3>
                        <h3 class="text-lg md:text-lg font-montserrat font-medium">{{ vacancy.payment ? 'Зарплата' : '' }} {{ vacancy.payment }}</h3>
                        <h3 class="text-base md:text-lg font-montserrat font-normal">Компания: {{ vacancy.company }}</h3>
                        <h3 class="text-base md:text-lg font-montserrat font-normal">Локация: {{ vacancy.city }}</h3>
                    </div>
                    <div class="flex flex-col gap-4">
                        <span class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 w-fit ring-1 ring-inset ring-gray-500/10">{{ vacancy.experience == 'Более 6 лет' ? 'Опыт:' : '' }} {{ vacancy.experience }}</span>
                        <button class="text-center w-full md:w-[250px] h-12 md:h-[60px] bg-white">
                            <p class="font-montserrat font-semibold text-base text-black md:text-xl">Откликнуться</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>