<script>
import axios from "axios";
export default {
  data: function () {
    return {
      products: [],
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products").then((response) => {
        console.log("products index", response);
        this.products = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="products-index">
    <h1>All Products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <h2>{{ product.name }}</h2>
      <img v-bind:src="product.url" v-bind:alt="product.name" />
      <p>price: {{ product.price }}</p>
      <p>description: {{ product.description }}</p>
      <p>image_url: {{ product.image_url }}</p>
      <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
    </div>
  </div>
</template>
