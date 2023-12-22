<script setup>
import { watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { doc } from "firebase/firestore";
import { useFirestore, useDocument } from "vuefire";
import Link from "@/components/Link.vue";
import { useProductsStore } from "@/stores/products";
import useImage from "@/composables/useImage";

// Querie firestore
const router = useRouter();
const route = useRoute();
const db = useFirestore();
const docRef = doc(db, "products", route.params.id);
const product = useDocument(docRef);

const { onFileChange, url, isImageUploaded } = useImage();
const products = useProductsStore();

const formData = reactive({
  name: "",
  category: "",
  price: "",
  availability: "",
  image: "",
});

watch(product, (product) => {
  if (!product) {
    router.push({ name: "products" });
  }
  Object.assign(formData, product);
});

const submitHandler = async (data) => {
  try {
    await products.updateProduct(docRef,{...data, url});
    router.push({ name: "products" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <Link to="products"> Go Back </Link>
    <h1 class="text-4xl my-10 font-extrabold">Edit Product</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="mx-auto mt-10 p-10 w-full 2xl:w-2/4">
        <FormKit
          type="form"
          :value="formData"
          submit-label="Save Changes"
          incomplete-message="Could not send, check error messages"
          @submit="submitHandler"
          :actions="false"
        >
          <FormKit
            type="text"
            label="Name"
            name="name"
            placeholder="Product Name"
            validation="required"
            v-model.trim="formData.name"
            :validation-messages="{
              required: 'Product name is required',
            }"
          />

          <FormKit
            type="select"
            label="Category"
            name="category"
            validation="required"
            v-model.number="formData.category"
            :validation-messages="{ required: 'Category is required' }"
            :options="products.categoryOptions"
          />

          <FormKit
            type="number"
            label="Price"
            name="price"
            placeholder="Product Price"
            step="1"
            min="1"
            v-model.number="formData.price"
          />

          <FormKit
            type="number"
            label="Availability"
            name="availability"
            placeholder="Quantity Available"
            v-model.number="formData.availability"
            step="1"
            min="0"
          />

          <div v-if="isImageUploaded">
            <p class="font-black">New Image:</p>
            <img :src="url" alt="New product image" class="w-52" />
          </div>

          <div v-else>
            <p class="font-black">Actual Image:</p>
            <img
              :src="formData.image"
              :alt="'image of ' + formData.image"
              class="w-52"
            />
          </div>

          <FormKit
            type="file"
            label="Change image"
            name="image"
            multiple="false"
            accept=".jpg"
            @change="onFileChange"
          />

          <FormKit type="submit">Save Changes</FormKit>
        </FormKit>
      </div>
    </div>
  </div>
</template>
