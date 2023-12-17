<script setup>
import Link from "@/components/Link.vue";
</script>

<template>
  <div>
    <Link to="products">Go Back</Link>

    <h1 class="text-4xl font-black my-10">New Product</h1>

    <div class="flex justify-center bg-white shadow"></div>

    <FormKit type="form" submit-label="Add Product">
      <FormKit
        type="text"
        label="Name"
        name="name"
        placeholder="Product Name"
        validation="required"
        :validation-messages="{required: 'Product name is required'}"
      />

      <FormKit
        type="file"
        label="Product Image"
        name="image"
        validation="required"
        :validation-messages="{required: 'Product image is required'}"
        accept=".jpg"
      />

      <FormKit
        type="select"
        label="Category"
        name="category"
        validation="required"
        :validation-messages="{required: 'Category is required'}"
        :options="[1,2,3]"
      />

      <FormKit
        type="number"
        label="Price"
        name="price"
        placeholder="Product Price"
        validation="required"
        :validation-messages="{required: 'Product Price is required'}"
        min="1"
      />

      <FormKit
        type="number"
        label="Available"
        name="availability"
        placeholder="Quantity Available"
        validation="required"
        :validation-messages="{required: 'Quantity Available is required'}"
        min="1"
      />
    </FormKit>
  </div>
</template>
