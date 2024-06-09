<script setup>
import Button from '../components/Button.vue';
import { useRegistrationStore } from '../stores/RegistrationStore'

const registrationStore = useRegistrationStore()

const errorMessage = registrationStore.errorMessage

</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Вход в аккаунт</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="registrationStore.auth()" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-white">Адрес электронной почты</label>
                    <div class="mt-2">
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            v-model="registrationStore.email"
                            class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                            placeholder="john@gmail.com"
                            required
                        >
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-white">Пароль</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-[#FFE70C] hover:text-yellow-300">Забыли пароль?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            v-model="registrationStore.password"
                            class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                            placeholder="12345"
                            required
                        >
                    </div>
                </div>

                <div>
                    <button type="submit" class="text-center w-full h-fit p-4 bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300">
                        <p class="font-montserrat font-semibold text-base md:text-xl">Войти</p>
                    </button>
                </div>
            </form>

            <div v-if="errorMessage" class="mt-4 text-red-500">
                {{ errorMessage }}
            </div>

            <div class="flex justify-between items-center">
                <p class="mt-10 text-center text-sm text-white">
                    Нет аккаута?
                    {{ ' ' }}
                    <router-link to="/registration" class="font-semibold leading-6 text-[#FFE70C] hover:text-yellow-300">Зарегистрируйся</router-link>
                </p>
                <p @click="registrationStore.logOut" class="mt-10 font-semibold leading-6 text-[#FFE70C] hover:text-yellow-300 cursor-pointer">Выйти</p>
            </div>
        </div>
    </div>
</template>