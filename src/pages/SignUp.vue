<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';
import { useRegistrationStore } from '../stores/RegistrationStore'

const registrationStore = useRegistrationStore()

const handleSubmit = () => {
    const userData = ref({
        name: registrationStore.username,
        email: registrationStore.email,
        password: registrationStore.password,
    })
    registrationStore.register(userData.value)
}

</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="/logo.svg" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Регистрация</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-white">Имя</label>
                    <div class="mt-2">
                        <input 
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            v-model="registrationStore.username"
                            class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                            placeholder="Имя"
                            required
                        >
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-white">Адрес элетронной почты</label>
                    <div class="mt-2">
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            v-model="registrationStore.email"
                            class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:bg-black transition duration-500 focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                            placeholder="Email"
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
                            class="w-full h-12 md:h-[60px] bg-transparent border-4 border-solid border-[#FFE70C] focus:border-black transition duration-500 px-6 text-[#BABABA] text-base font-montserrat outline-none" 
                            placeholder="password"
                            required
                        >
                    </div>
                </div>

                <div>
                    <button type="submit" class="text-center w-full h-fit p-4 bg-black shadow-yellow-sharp hover:shadow-yellow-sharp-hover transition-shadow duration-300">
                        <p class="font-montserrat font-semibold text-base md:text-xl">Зарегистрироваться</p>
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-white">
                Есть аккаунт?
                {{ ' ' }}
                <router-link to="/login" class="font-semibold leading-6 text-[#FFE70C] hover:text-yellow-300">Войти</router-link>
            </p>
        </div>
    </div>
</template>