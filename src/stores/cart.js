import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const MAX_PRODUCT = 5;

  function addItem(item) {
    items.value.push(item);
  }

  const isEmpty = computed(() => items.value.length === 0);

  const checkProductAvailalbility = computed(() => {
    return (product) =>
      product.availability < 5 ? product.availability : MAX_PRODUCT;
  });

  return {
    addItem,
    isEmpty,
    items,
    checkProductAvailalbility,
  };
});
