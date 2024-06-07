<script setup>
import { ref } from "vue"

const isOpen = ref(false)
const filters = ref({
    jobType: [], 
    schedule: [],
    remote: ''
})

const jobType = ref(['Полная занятость', 'Частичная занятость', 'Проектная работа', 'Стажировка', 'Волонтерство'])
const schedule = ref(['Полный день', 'Удаленная работа', 'Гибкий график', 'Сменный график', 'Вахтовый метод'])
const experience = ref(['Не имеет значения', 'От 1 до 3 лет', 'От 2 до 6 лет', 'Нет опыта', 'Более 6 лет'])

const toggleSidebar = () => {
    isOpen.value = !isOpen.value
}
const applyFilters = () => {
    isOpen.value = false // Close the sidebar after applying filters
}
</script>

<template>
    <div :class="['sticky-sidebar', 'md:h-screen']">
        <!-- Burger button -->
        <button @click="toggleSidebar" class="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>

        <!-- Sidebar -->
        <div :class="['fixed inset-0 z-40 transition-transform transform md:relative md:translate-x-0 md:block w-full bg-black md:bg-transparent p-4 border-r border-gray-300', isOpen ? 'translate-x-0' : '-translate-x-full']">
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
                        :class="['inline-block cursor-pointer rounded-full px-4 py-2 m-1', filters.jobType.includes(job) ? 'bg-[#FFE70C] border-solid border-2 border-black text-black' : 'bg-white hover:bg-gray-200 border-solid border-2 border-black text-gray-800']"    
                    >
                        <input type="checkbox" :value="job" class="hidden" v-model="filters.jobType" />
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
                        :class="['inline-block cursor-pointer rounded-full px-4 py-2 m-1', filters.schedule.includes(jobSchedule) ? 'bg-[#FFE70C] border-solid border-2 border-black text-black' : 'bg-white hover:bg-gray-200 border-solid border-2 border-black text-gray-800']"
                    >
                        <input type="checkbox" :value="jobSchedule" class="hidden" v-model="filters.schedule" />
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
                        :class="['inline-block cursor-pointer rounded-full px-4 py-2 m-1', filters.remote ===  exp ? 'bg-[#FFE70C] border-solid border-2 border-black text-black' : 'bg-white hover:bg-gray-200 border-solid border-2 border-black text-gray-800']"
                    >
                        <input type="radio" name="remote" :value="exp" class="hidden" v-model="filters.remote" />
                        {{ exp }}
                    </label>
                </div>
            </div>
            <button @click="applyFilters" class="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm">Применить</button>
        </div>
    </div>
</template>