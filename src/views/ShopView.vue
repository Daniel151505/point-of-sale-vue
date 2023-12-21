<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";
import MainNav from "../components/MainNav.vue";
import ProductCardVue from "../components/ProductCard.vue";
import ShoppingCartVue from "@/components/ShoppingCart.vue";

const products = useProductsStore();
const { filteredProducts, noResults } = storeToRefs(products);
</script>

<template>
  <MainNav />
  <main class="pt-10 lg:flex lg:h-screen lg:overflow-y-hidden">
    <div class="lg:w-2/3 lg:screen lg:overflow-y-scroll px-10">
      <h2 class="text-lg font-extrabold">Filters:</h2>
      <div class="flex gap-5 text-dark text-center">
        <div
          class="flex items-center gap-2"
          v-for="category in products.categories"
          :key="category.id"
        >
          <input
            type="radio"
            name="category"
            :value="category.id"
            class="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
            :checked="products.selectedCategory === category.id"
            @change="products.selectedCategory = +$event.target.value"
          />
          <label class="text-dark-100">{{ category.name }}</label>
        </div>
      </div>
      <p v-if="noResults" class="text-center text-4xl">There are no products</p>

      <div
        v-else
        class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 pt-10"
      >
        <ProductCardVue
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <aside class="lg:w-1/3 lg:screen lg:overflow-y-scroll py-24 px-10">
      <ShoppingCartVue />
    </aside>
  </main>
</template>
