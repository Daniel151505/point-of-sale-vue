<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Link from "@/components/Link.vue";
import useImage from "../../composables/useImage";
import { useProductsStore } from "../../stores/products";

const { url, onFileChange, isImageUploaded } = useImage();
const products = useProductsStore();
const router = useRouter();

const formData = reactive({
  name: "",
  category: "",
  price: "",
  availability: "",
  image: "",
});

const submitHandler = async (data) => {
  const { image, ...values } = data;

  try {
    await products.createProduct({ ...values, image: url.value });
    router.push({ name: "products" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <Link to="products">Go Back</Link>

    <h1 class="text-4xl font-black my-10">New Product</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="mt-10 p-10 w-full 2xl:w-2/4">
        <FormKit
          type="form"
          submit-label="Add Product"
          incomplete-message="Sorry, could not send, check the error messages"
          @submit="submitHandler"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Name"
            name="name"
            placeholder="Product Name"
            validation="required"
            :validation-messages="{ required: 'Product name is required' }"
            v-model.trim="formData.name"
          />

          <FormKit
            type="file"
            label="Product Image"
            name="image"
            validation="required"
            :validation-messages="{ required: 'Product image is required' }"
            accept=".jpg"
            @change="onFileChange"
            v-model.trim="formData.image"
          />

          <div v-if="isImageUploaded">
            <p class="font-black">Product Image:</p>

            <img :src="url" aly="New product image" class="w-32" />
          </div>

          <FormKit
            type="select"
            label="Category"
            name="category"
            validation="required"
            :validation-messages="{ required: 'Category is required' }"
            :options="products.categoryOptions"
            v-model.number="formData.category"
          />

          <FormKit
            type="number"
            label="Price"
            name="price"
            placeholder="Product Price"
            validation="required"
            :validation-messages="{ required: 'Product Price is required' }"
            min="1"
            v-model.number="formData.price"
          />

          <FormKit
            type="number"
            label="Available"
            name="availability"
            placeholder="Quantity Available"
            validation="required"
            :validation-messages="{
              required: 'Quantity Available is required',
            }"
            min="1"
            v-model.number="formData.availability"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
