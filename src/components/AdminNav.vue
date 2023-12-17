<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Link from './Link.vue';
import LogoVue from './Logo.vue';

const isMobileMenuVisible = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};
</script>

<template>
  <header class="px-5 py-3 md:px-10 md:py-5 bg-gray-700 flex justify-between items-center relative top-0 w-full z-10">
    <div>
      <LogoVue />
    </div>
    <nav class="hidden md:flex">
      <RouterLink :to="{ name: 'products' }" class="router-link-active router-link-exact-active rounded text-white font-bold p-2">
        Products
      </RouterLink>
      <RouterLink :to="{ name: 'sales' }" class="rounded text-white font-bold p-2">
        Sales
      </RouterLink>
      <Link to="shop" class="rounded bg-green-400 hover:bg-green-500 font-bold px-1 py-2 px-5 md:px-10">Go to Store</Link>
    </nav>
    <div class="md:hidden">
      <button @click="toggleMobileMenu" class="text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <transition name="fade">
        <div v-if="isMobileMenuVisible" @click="toggleMobileMenu" class="fixed inset-0 bg-black opacity-50"></div>
      </transition>
      <div v-show="isMobileMenuVisible" class="text-center absolute w-full top-16 right-0 bg-gray-700 py-2 px-20 space-y-2">
        <RouterLink :to="{ name: 'products' }" class="router-link-active router-link-exact-active rounded text-white font-bold p-2 block">
          Products
        </RouterLink>
        <RouterLink :to="{ name: 'sales' }" class="rounded text-white font-bold p-2 block">
          Sales
        </RouterLink>
        <RouterLink :to="{ name: 'shop' }" class="rounded bg-green-400 hover:bg-green-500 font-bold px-2 py-1 block">Go to Store</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
