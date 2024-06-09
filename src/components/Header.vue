<script setup>
import { ref } from "vue"
import { useRegistrationStore } from '../stores/RegistrationStore'

const registrationStore = useRegistrationStore()

defineProps({
  menuItems: {
    type: Array,
    required: true
  }
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
  <div class="flex justify-between items-center my-3 md:my-6 lg:my-12 space-y-4 md:space-y-0 md:space-x-4">
    <router-link to="/">
      <div class="flex gap-3 items-center">
        <img class="w-16 h-16 opacity-100" src="/logo.svg" alt="logo">
        <div class="hidden sm:flex flex-col">
          <p class="font-montserrat font-semibold text-lg md:text-xl">Палитра вакансий</p>
          <p class="font-montserrat font-normal text-lg md:text-xl">Найди работу бесплатно</p>
        </div>
      </div>
    </router-link>
    <div>
      <button @click="toggleMenu" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <nav :class="isMenuOpen ? 'block' : 'hidden'" class="fixed inset-0 bg-black bg-opacity-90 z-50 lg:static lg:bg-transparent lg:flex lg:items-center lg:space-x-4">
        <button @click="toggleMenu" class="lg:hidden mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <ul class="flex flex-col gap-10 justify-center items-center lg:flex-row lg:h-auto lg:space-x-4">
          <li v-for="item in menuItems"
            :key="item"
            class="flex flex-col lg:flex-row justify-center lg:items-center bg-transparent lg:bg-black w-40 h-full lg:h-10 md:w-[165px] md:h-[27px] lg:shadow-sharp lg:hover:shadow-sharp-hover lg:transition-shadow duration-300">
            <p class="text-center font-montserrat font-semibold text-sm md:text-xl">{{ item }}</p>
          </li>
          <router-link to="/login">
            <li class="flex items-end">
              <font-awesome-icon 
                icon="fa-solid fa-user" 
                style="color: #ffffff;"
                size="xl"
              /> 
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>