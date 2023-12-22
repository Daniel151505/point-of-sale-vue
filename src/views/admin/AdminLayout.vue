<script setup>
import AdminNavVue from "@/components/AdminNav.vue";
</script>

<template>
  <AdminNavVue/>
  <div class="pt-10 container mx-auto lg:min-h-screen">
    <RouterView />
  </div>
</template>
