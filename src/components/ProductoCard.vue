<template>
  <el-card>
    <img :src="product.images[0]" alt="product image" />
    <div class="card-body">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>Precio: {{ product.price }}</p>
      <el-button type="primary" @click="goToProductDetails(product.id)"
        >Más info</el-button
      >
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Product } from "@/interfaces/producto";
import router from "@/router";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props, context) {
    const goToProductDetails = (productId: number) => {
      router.push({
        name: "ProductDetailView",
        params: { id: productId },
      });
    };
    const productDetail = ref<Product>({} as Product);
    console.log("ProductCard: " + props.product);

    return {
      productDetail,
      goToProductDetails,
    };
  },
});
</script>

<style scoped>
.el-card {
  margin: 20px;
  width: 300px;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
