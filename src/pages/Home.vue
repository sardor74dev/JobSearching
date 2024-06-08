<script setup>
import Button from '../components/Button.vue';
import { useRegistrationStore } from '../stores/RegistrationStore'

const RegistrationStore = useRegistrationStore()
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-between my-[83px] lg:my-[167px] gap-0 md:gap-12 space-y-8 md:space-y-0">
        <div class="flex flex-col">
            <h1 class="text-3xl text-center md:text-left md:text-4xl lg:text-6xl font-montserrat font-semibold max-w-full md:max-w-[670px]">
                <p class="inline text-[#FAFF00]">Креативная</p> работа для всех от 70000 в месяц
            </h1>
            <h3 class="mb-[60px] mt-5 md:my-[26px] xl:my-[46px] text-lg md:text-2xl text-center md:text-left font-montserrat font-semibold">Не трать своё время <p class="inline text-[#FF2B2B]">попусту</p>. Начни зарабатывать</h3>
            <div class="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between">
                <Button path="/vacancies" msg="Посмотреть вакансии" />
                <Button @click="RegistrationStore.showToken" path="/vacancies" msg="Опубликовать вакансию" />
                <button @click="RegistrationStore.logOut">Лог аут</button>
            </div>
        </div>
        
        <div class="flex flex-col items-center gap-10 md:gap-9 lg:gap-11">
            <div class="flex items-center px-6 py-4 bg-black shadow-yellow-sharp w-[80vw] md:w-[456px] h-fit font-montserrat font-semibold">
                <h3 class="text-center lg:text-left text-lg md:text-2xl font-montserrat font-semibold">Оставь свои данные, и мы свяжемся с тобой</h3>
            </div>
            <input 
                class="w-[65.4vw] md:w-[350px] h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                placeholder="Твое имя"
                type="text">
            <input 
                class="w-[65.4vw] md:w-[350px] h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                placeholder="Твой телефон"
                type="tel">
            <Button path="/" msg="Отправить резюме" />
        </div>
    </div>
</template>