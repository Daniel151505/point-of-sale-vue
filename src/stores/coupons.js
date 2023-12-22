import { ref } from "firebase/database";
import { defineStore } from "pinia";

export const useCouponStore = defineStore("coupon", () => {
  const couponInput = ref("");
  const couponValidationMessage = ref("");
  const discountPercentaje = ref(0);

  const VALID_COUPONS = [
    { name: "1ODISCOUNT", discount: 0.1 },
    { name: "2ODISCOUNT", discount: 0.2 },
  ];

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

  return {
    couponInput,
    couponValidationMessage,
    applyCoupon,
  };
});
