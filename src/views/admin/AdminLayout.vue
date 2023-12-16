<script setup>
import AdminNavVue from "@/components/AdminNav.vue";
</script>

<template>
  <AdminNavVue/>
  <div class="pt-32 container mx-auto lg:min-h-screen">
    <RouterView />
  </div>
</template>
