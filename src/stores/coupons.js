import { ref, watch, computed } from "vue";
import { defineStore } from "pinia";
import { useCartStore } from "./cart";

export const useCouponStore = defineStore("coupon", () => {
  const cart = useCartStore();
  const couponInput = ref("");
  const couponValidationMessage = ref("");
  const discountPercentaje = ref(0);
  const discount = ref(0);

  const VALID_COUPONS = [
    { name: "1ODISCOUNT", discount: 0.1 },
    { name: "2ODISCOUNT", discount: 0.2 },
  ];

  watch(discountPercentaje, () => {
    discount.value = (cart.total * discountPercentaje.value).toFixed(2);
  });

  function applyCoupon() {
    if (VALID_COUPONS.some((coupon) => coupon.name === couponInput.value)) {
      couponValidationMessage.value = "Applying...";

      setTimeout(() => {
        discountPercentaje.value = VALID_COUPONS.find(
          (coupon) => coupon.name === couponInput.value
        ).discount;
        couponValidationMessage.value = "¡Discount Applied!";
      }, 3000);
    } else {
      couponValidationMessage.value = "There is no such coupon";
    }

    setTimeout(() => {
      couponValidationMessage.value = "";
    }, 5000);
  }

  function $reset() {
    couponInput.value = "";
    couponValidationMessage.value = "";
    discountPercentaje.value = 0;
    discount.value = 0;
  }

  const isValidCoupon = computed(() => discountPercentaje.value > 0);

  return {
    couponInput,
    couponValidationMessage,
    discount,
    isValidCoupon,
    applyCoupon,
    $reset,
  };
});
