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
const details = ref('')
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
                                        <option value="Полная занятость">Полная занятость</option>
                                        <option value="Частичная занятость">Частичная занятость</option>
                                        <option value="Проектная работа">Проектная работа</option>
                                        <option value="Стажировка">Стажировка</option>
                                        <option value="Волонтерство">Волонтерство</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-span-3 sm:col-span-1">
                                <label for="schedule" class="block text-sm font-medium leading-6 text-white">График работы</label>
                                <div class="mt-2">
                                    <select id="schedule" name="schedule" autocomplete="schedule" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                                        <option value="Полный день">Полный день</option>
                                        <option value="Удаленная работа">Удаленная работа</option>
                                        <option value="Гибкий график">Гибкий график</option>
                                        <option value="Сменный график">Сменный график</option>
                                        <option value="Вахтовый метод">Вахтовый метод</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-span-3 sm:col-span-1">
                                <label for="experience" class="block text-sm font-medium leading-6 text-white">Опыт работы</label>
                                <div class="mt-2">
                                    <select id="experience" name="experience" autocomplete="experience" class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none">
                                        <option value="Опыт 1-3 года">Опыт 1-3 года</option>
                                        <option value="Опыт 3-6 лет">Опыт 3-6 лет</option>
                                        <option value="Без опыта">Без опыта</option>
                                        <option value="Более 6 лет">Более 6 лет</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-10">
                            <label for="about" class="block text-sm font-medium leading-6 text-white">Детали</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" v-model="details" rows="3" class="w-full h-12 bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 py-2 text-[#BABABA] text-base font-montserrat outline-none"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" @click="vacanciesStore.postVacancies(title, company, location, jobType, schedule, experience, payment, details)" class="text-center w-[50vw] lg:w-[250px] h-12 md:h-[60px] h-[46px] p-2 bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300">
                    <p class="font-montserrat font-semibold text-base md:text-xl">Post</p>
                </button>
            </div>
        </form>
    </div>
</template>