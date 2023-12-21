import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const subtotal = ref(0);

  const MAX_PRODUCT = 5;

  watch(
    items,
    () => {
      subtotal.value = items.value.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    {
      deep: true,
    }
  );

  function addItem(item) {
    items.value.push({ ...item, quantity: 1, id: item.id });
  }

  function updateQuantity(id, quantity) {
    items.value = items.value.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
  }

  const isEmpty = computed(() => items.value.length === 0);

  const checkProductAvailalbility = computed(() => {
    return (product) =>
      product.availability < 5 ? product.availability : MAX_PRODUCT;
  });

  return {
    addItem,
    updateQuantity,
    isEmpty,
    items,
    subtotal,
    checkProductAvailalbility,
  };
});
