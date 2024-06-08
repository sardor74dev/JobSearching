<script setup>
import { ref } from 'vue';
import { useVacanciesStore } from '../stores/VacanciesStore';

const vacanciesStore = useVacanciesStore()

const title = ref('')
const company = ref()
const location = ref('')
const jobType = ref('')
const schedule = ref('')
const experience = ref('')
const payment = ref('')
</script>

<template>
    <div class="job-post-form">
        <h2 class="text-2xl font-bold mb-4">Post a Job</h2>
        <form @submit.prevent="submitJob">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10">
                        <div class="col-span-10 sm:col-span-5 lg:col-span-3">
                            <label for="title" class="block text-sm font-medium leading-6 text-white">Название работы, должность</label>
                            <div class="mt-2">
                                <input v-model="title" id="title" type="text" placeholder="Должность" name="title" autocomplete="title" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                            </div>
                        </div>

                        <div class="col-span-10 sm:col-span-5 lg:col-span-2">
                            <label for="payment" class="block text-sm font-medium leading-6 text-white">Доход</label>
                            <div class="mt-2">
                                <input v-model="payment" type="text" placeholder="Доход" name="payment" id="payment" autocomplete="payment" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                            </div>
                        </div>

                        <div class="col-span-10 sm:col-span-5 lg:col-span-2">
                            <label for="company" class="block text-sm font-medium leading-6 text-white">Компания</label>
                            <div class="mt-2">
                                <input v-model="company" id="company" type="text" placeholder="Название компании" name="company" autocomplete="company" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                            </div>
                        </div>

                        <div class="col-span-10 sm:col-span-5 lg:col-span-3">
                            <label for="email" class="block text-sm font-medium leading-6 text-white">Адрес</label>
                            <div class="mt-2">
                                <input v-model="location" id="location" type="text" name="location" placeholder="Адрес" autocomplete="location" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                            </div>
                        </div>

                        <div class="grid grid-cols-3 col-span-10 gap-y-8 gap-x-6">
                            <div class="col-span-3 sm:col-span-1">
                                <label for="type" class="block text-sm font-medium leading-6 text-white">Тип занятости</label>
                                <div class="mt-2">
                                    <select id="type" name="type" autocomplete="type" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                                        <option value="Full-time">Полная занятость</option>
                                        <option value="Part-time">Частичная занятость</option>
                                        <option value="Contract">Проектная работа</option>
                                        <option value="Part-time">Стажировка</option>
                                        <option value="Contract">Волонтерство</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-span-3 sm:col-span-1">
                                <label for="schedule" class="block text-sm font-medium leading-6 text-white">График работы</label>
                                <div class="mt-2">
                                    <select id="schedule" name="schedule" autocomplete="schedule" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                                        <option value="Full-time">Полный день</option>
                                        <option value="Part-time">Удаленная работа</option>
                                        <option value="Contract">Гибкий график</option>
                                        <option value="Part-time">Сменный график</option>
                                        <option value="Contract">Вахтовый метод</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-span-3 sm:col-span-1">
                                <label for="experience" class="block text-sm font-medium leading-6 text-white">Опыт работы</label>
                                <div class="mt-2">
                                    <select id="experience" name="experience" autocomplete="experience" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                                        <option value="Full-time">Опыт 1-3 года</option>
                                        <option value="Part-time">Опыт 3-6 лет</option>
                                        <option value="Contract">Без опыта</option>
                                        <option value="Contract">Более 6 лет</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-10">
                            <label for="about" class="block text-sm font-medium leading-6 text-white">Детали</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="3" class="w-full h-12 bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 py-2 text-[#BABABA] text-base font-montserrat outline-none"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" @click="vacanciesStore.postVacancies(title, company, location, jobType, schedule, experience, payment)" class="px-4 py-2 bg-yellow-500 text-black rounded-md shadow-sm">Post Job</button>
            </div>
        </form>
    </div>
</template>