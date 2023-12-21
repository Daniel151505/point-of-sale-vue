<script setup>
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">
    The cart is empty
  </p>
</template>
