<script setup>
import { computed, ref } from 'vue';
import Header from './components/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const showHeader = computed(() => route.path !== '/registration' && route.path !== '/login')

const menuItems = ref(['Каталог', 'О нас', 'Контакты'])
</script>

<template>
  <div class="min-h-screen bg-main-image bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto py-4 px-[4.79vw]">
      <Header v-if="showHeader" :menuItems="menuItems"/>
      <router-view />
    </div>
  </div>
</template>