<script setup>
import { ref } from 'vue';
import { useVacanciesStore } from '../stores/VacanciesStore';

const vacanciesStore = useVacanciesStore()

const job = ref({
    title: '',
    company: '',
    city: '',
    jobType: '',
    schedule: '',
    experience: '',
    payment: '',
})

const title = ref(''),
    company = ref(),
    city = ref(''),
    jobType = ref(''),
    schedule = ref(),
    experience = ref(),
    payment = ref()
</script>

<template>
    <div class="job-post-form">
        <h2 class="text-2xl font-bold mb-4">Post a Job</h2>
        <form @submit.prevent="submitJob">
            <div class="mb-4">
                <label for="title" class="block mb-2">Название работы, должность</label>
                <input v-model="title" id="title" type="text" class="w-full p-2 border border-gray-300 rounded-md" required>
            </div>
            <div class="mb-4">
                <label for="company" class="block mb-2">Компания</label>
                <input v-model="company" id="company" type="text" class="w-full p-2 border border-gray-300 rounded-md" required>
            </div>
            <div class="mb-4">
                <label for="city" class="block mb-2">Локация</label>
                <input v-model="city" id="city" type="text" class="w-full p-2 border border-gray-300 rounded-md" required>
            </div>
            <div class="mb-4">
                <label for="type" class="block mb-2">Тип занятости</label>
                <select v-model="type" id="type" class="w-full p-2 border border-gray-300 rounded-md" required>
                    <option value="Full-time">Полная занятость</option>
                    <option value="Part-time">Частичная занятость</option>
                    <option value="Contract">Проектная работа</option>
                    <option value="Part-time">Стажировка</option>
                    <option value="Contract">Волонтерство</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="schedule" class="block mb-2">График работы</label>
                <select v-model="schedule" id="type" class="w-full p-2 border border-gray-300 rounded-md" required>
                    <option value="Full-time">Полный день</option>
                    <option value="Part-time">Удаленная работа</option>
                    <option value="Contract">Гибкий график</option>
                    <option value="Part-time">Сменный график</option>
                    <option value="Contract">Вахтовый метод</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="experience" class="block mb-2">Опыт работы</label>
                <select v-model="experience" id="type" class="w-full p-2 border border-gray-300 rounded-md" required>
                    <option value="Full-time">Опыт 1-3 года</option>
                    <option value="Part-time">Опыт 2-6 лет</option>
                    <option value="Contract">Без опыта</option>
                    <option value="Contract">Более 6 лет</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="payment" class="block mb-2">Оплата</label>
                <input v-model="payment" id="payment" type="text" class="w-full p-2 border border-gray-300 rounded-md">
            </div>
            <button type="submit" @click="vacanciesStore.postVacancies(title, company, city, jobType, schedule, experience, payment)" class="px-4 py-2 bg-yellow-500 text-black rounded-md shadow-sm">Post Job</button>
        </form>
    </div>
</template>