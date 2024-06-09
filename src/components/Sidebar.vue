<script setup>
import { ref } from "vue"
import { useVacanciesStore } from '../stores/VacanciesStore'

const vacanciesStore = useVacanciesStore()

const isOpen = ref(false)

const jobType = ref(['Полная занятость', 'Частичная занятость', 'Проектная работа', 'Стажировка', 'Волонтерство'])
const schedule = ref(['Полный день', 'Удаленная работа', 'Гибкий график', 'Сменный график', 'Вахтовый метод'])
const experience = ref(['Не имеет значения', 'От 1 до 3 лет', 'От 2 до 6 лет', 'Без опыта', 'Более 6 лет'])

const toggleSidebar = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div :class="['sticky-sidebar', 'lg:h-screen']">
        <button @click="toggleSidebar" class="lg:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>

        <div :class="['fixed inset-0 z-40 transition-transform transform lg:relative lg:translate-x-0 lg:block w-full bg-black lg:bg-transparent p-4 border-r border-gray-300', isOpen ? 'translate-x-0' : '-translate-x-full']">
            <button @click="toggleSidebar" class="md:hidden mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <h2 class="text-xl font-montserrat font-semibold mb-4">Фильтр</h2>
            <div class="mb-4">
                <h3 class="font-semibold mb-2">Тип занятости</h3>
                <div>
                    <label
                        v-for="job in jobType"
                        :key="job"
                        :class="['lg:bg-transparent lg:text-white lg:border-0 inline-flex cursor-pointer rounded-full px-4 py-2 m-1', vacanciesStore.selectedJobTypes.includes(job) ? 'bg-[#FFE70C] border-solid border-2 border-black text-black' : 'bg-white hover:bg-gray-200 lg:hover:bg-transparent border-solid border-2 border-black text-gray-800']"    
                    >
                        <input type="checkbox" :value="job" class="hidden md:block mr-2" v-model="vacanciesStore.selectedJobTypes" />
                        {{ job }}
                    </label>
                </div>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold mb-2">График работы</h3>
                <div>
                    <label 
                        v-for="jobSchedule in schedule"
                        :key="jobSchedule"
                        :class="['lg:bg-transparent lg:text-white lg:border-0 inline-flex cursor-pointer rounded-full px-4 py-2 m-1', vacanciesStore.selectedSchedules.includes(jobSchedule) ? 'bg-[#FFE70C] border-solid border-2 border-black text-black' : 'bg-white hover:bg-gray-200 lg:hover:bg-transparent border-solid border-2 border-black text-gray-800']"
                    >
                        <input type="checkbox" :value="jobSchedule" class="hidden md:block mr-2" v-model="vacanciesStore.selectedSchedules" />
                        {{ jobSchedule }}
                    </label>
                </div>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold mb-2">Опыт работы</h3>
                <div>
                    <label 
                        v-for="exp in experience"
                        :key="exp"
                        :class="['lg:bg-transparent lg:text-white lg:border-0 inline-flex cursor-pointer rounded-full px-4 py-2 m-1', vacanciesStore.selectedExperience === exp ? 'bg-[#FFE70C] border-solid border-2 border-black text-black' : 'bg-white hover:bg-gray-200 lg:hover:bg-transparent border-solid border-2 border-black text-gray-800']"
                    >
                        <input type="checkbox" name="remote" :value="exp" class="hidden md:block mr-2" v-model="vacanciesStore.selectedExperience" />
                        {{ exp }}
                    </label>
                </div>
            </div>
            <button @click="vacanciesStore.searchByProps" class="mb-4 text-center w-fit h-fit p-4 bg-black shadow-filter-button hover:shadow-filter-button-hover transition-shadow duration-300">Применить</button>
        </div>
    </div>
</template>