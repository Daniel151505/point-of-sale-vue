<script setup>
import { ref } from "vue";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { useSalesStore } from "../../stores/sales";

const sales = useSalesStore();

const formatter = ref({
  date: "DD/MM/YYYY",
  month: "MMMM",
});
</script>

<template>
  <div>
    <h1 class="text-4xl font-black my-10">Sales Summary</h1>

    <div class="md:flex md:items-start gap-5">
      <div class="md:w-1/2 lg:w-1/3 bg-white flex justify-center p-5">
        <VueTailwindDatePicker
          as-single
          no-input
          v-model="date"
          :formatter="formatter"
        />
      </div>

      <div
        class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32"
      >
        <p class="text-center text-lg" v-if="sales.isDateSelected">
          Sales of the date: <span class="font-black">{{ sales.date }}</span>
        </p>

        <p v-else class="text-center text-lg">Select a date</p>
      </div>
    </div>
  </div>
</template>
