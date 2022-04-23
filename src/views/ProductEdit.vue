<script>
import axios from "axios";
export default {
  data: function () {
    return {
      product: {},
      editProductParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/products/" + this.$route.params.id).then((response) => {
      console.log("products show", response);
      this.photo = response.data;
      this.editProductParams = this.product;
    });
  },
  methods: {
    updateProduct: function (product) {
      axios
        .patch("/products/" + product.id, this.editProductParams)
        .then((response) => {
          console.log("products update", response);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log("products update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="products-edit">
    <h1>Edit Product</h1>
    <form v-on:submit.prevent="updateProduct(photo)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      name:
      <input type="text" v-model="editProductParams.name" />
      price:
      <input type="text" v-model="editProductParams.price" />
      description:
      <input type="text" v-model="editProductParams.description" />
      image_url:
      <input type="text" v-model="editProductParams.image_url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>
