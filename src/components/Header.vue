<script setup>
import { ref } from "vue"

defineProps({
  menuItems: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
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
      <button @click="toggleMenu" class="lg:hidden focus:outline-none">
        <svg class="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <div :class="{'block': isOpen, 'hidden': !isOpen}" class="lg:flex lg:items-center lg:justify-between">
        <ul class="flex flex-col md:flex-row md:space-x-4">
          <li v-for="item in menuItems"
            :key="item"
            class="flex justify-center items-center bg-black w-40 h-10 md:w-[165px] md:h-[27px] shadow-sharp hover:shadow-sharp-hover transition-shadow duration-300">
            <p class="font-montserrat font-semibold text-sm md:text-xl">{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>