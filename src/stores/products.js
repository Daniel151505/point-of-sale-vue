const { defineStore } = require("pinia");

export const useProductsStore = defineStore('products', () => {

    async function createProduct(product) {
        console.log(product)
    }

    return {
        createProduct
    }

})