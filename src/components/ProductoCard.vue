<template>
  <el-card>
    <img :src="product.images[0]" alt="product image" />
    <div class="card-body">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>Precio: {{ product.price }}</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "@/interfaces/producto";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-body {
  padding: 20px;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
