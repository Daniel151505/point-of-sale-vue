<script setup>
import ShoppingCartItem from "./ShoppingCartItem.vue";
import AmountVue from "./Amount.vue";
import CouponFormVue from "./CouponForm.vue";
import { useCartStore } from "@/stores/cart";
import { useCouponStore } from "@/stores/coupons";
import { formatCurrency } from "@/helpers";

const cart = useCartStore();
const coupon = useCouponStore();
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">
    The cart is empty
  </p>

  <div v-else>
    <p class="text-4xl font-bold text-gray-900">Sales Summary</p>
    <ul role="list" class="mt-6 divide-y divide-gray-200">
      <ShoppingCartItem
        v-for="item in cart.items"
        :key="item.id"
        :item="item"
      />
    </ul>
    <dl
      class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"
    >
      <AmountVue>
        <template #label> Subtotal: </template>
        {{ formatCurrency(cart.subtotal) }}
      </AmountVue>

      <AmountVue>
        <template #label> Taxes: </template>
        {{ formatCurrency(cart.taxes) }}
      </AmountVue>

      <AmountVue v-if="coupon.isValidCoupon">
        <template #label> Discount: </template>
        {{ formatCurrency(coupon.discount) }}
      </AmountVue>

      <AmountVue>
        <template #label> Total to pay: </template>
        {{ formatCurrency(cart.total) }}
      </AmountVue>
    </dl>

    <CouponFormVue />

    <button
      type="button"
      class="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold p-3"
      @click="cart.checkout"
    >
      Confirm purchase
    </button>
  </div>
</template>
