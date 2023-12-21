import { ref } from "firebase/database";
import { defineStore } from "pinia";

export const useCouponStore = defineStore("coupon", () => {
  const couponInput = ref("");
  const VALID_COUPONS = [
    { name: "1ODISCOUNT", discount: 0.1 },
    { name: "2ODISCOUNT", discount: 0.2 },
  ];

  function applyCoupon() {
    if (VALID_COUPONS.some((coupon) => coupon.name === couponInput.value)) {
    } else {
    }
  }

  return {
    couponInput,
    applyCoupon,
  };
});
