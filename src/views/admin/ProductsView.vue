<script setup>
import LinkVue from "@/components/Link.vue";
import ProductVue from "@/components/Product.vue";
import { useProductsStore } from "@/stores/products";

const products = useProductsStore();
</script>

<template>
  <div>
    <LinkVue to="new-product">New Product</LinkVue>

    <h1 class="text-4xl font-black my-10">Products</h1>

    <p v-if="products.noResults">No Results</p>

    <ul
      v-else
      role="list"
      class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"
    >
      <ProductVue
        v-for="product in products.productsCollection"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
