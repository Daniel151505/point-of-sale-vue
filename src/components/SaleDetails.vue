<script setup>
import { formatCurrency } from "@/helpers";
import AmountVue from "./Amount.vue";

defineProps({
  sale: {
    type: Object,
  },
});
</script>

<template>
  <div class="border-t border-gray-200 space-y-6 py-6">
    <h2 class="text-2xl font-black">Sale Details:</h2>
    <p class="text-xl font-black text-gray-500">Sold products</p>

    <ul
      role="list"
      class="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
    >
      <li v-for="item in sale.items" class="flex space-x-6 py-6">
        <img
          :src="item.image"
          :alt="'Image of ' + item.name"
          class="h-24 w-24 flex-none rounded-lg"
        />
        <div class="flex-auto space-y-2">
          <h3 class="text-gray-900">{{ item.name }}</h3>
          <p>{{ formatCurrency(item.price) }}</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
      </li>
    </ul>
    <dl
      class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"
    >
      <AmountVue>
        <template #label> Subtotal: </template>
        {{ formatCurrency(sale.subtotal) }}
      </AmountVue>

      <AmountVue>
        <template #label> Taxes: </template>
        {{ formatCurrency(sale.taxes) }}
      </AmountVue>

      <AmountVue v-if="sale.discount" class="bg-green-200 p-2">
        <template #label> Discount: </template>
        {{ formatCurrency(sale.discount) }}
      </AmountVue>

      <AmountVue>
        <template #label> Total paid: </template>
        {{ formatCurrency(sale.total) }}
      </AmountVue>
    </dl>
  </div>
</template>
