import { ref } from "firebase/database";
import { defineStore } from "pinia";

export const useCouponStore = defineStore("coupon", () => {
  const couponInput = ref("");

  return {
    couponInput,
  };
});
