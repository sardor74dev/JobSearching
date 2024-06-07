<script setup>
import { computed, ref } from 'vue';
import Header from './components/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const showHeader = computed(() => route.path !== '/registration' && route.path !== '/login')

const menuItems = ref(['Каталог', 'О нас', 'Отзывы', 'Контакты'])
</script>

<template>
  <div class="min-h-screen bg-main-image bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto py-4 px-[4.79vw]">
      <Header v-if="showHeader" :menuItems="menuItems"/>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>