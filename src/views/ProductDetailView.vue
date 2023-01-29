<template>
  <div class="detalleView">
    <h1>Detalle del Producto: {{ id }}</h1>
    <el-card>
      <!-- Comprobar que la imagen del producto no sea nula -->
      <img
        v-if="productDetail.images && productDetail.images.length > 0"
        :src="productDetail.images[0]"
        alt="product image"
      />
      <div class="card-body">
        <h3>{{ productDetail?.title }}</h3>
        <p>{{ productDetail?.description }}</p>
        <p>Precio: {{ productDetail?.price }}</p>
        <p>Fecha de creacion: {{ productDetail?.creationAt }}</p>
        <p>Fecha de actualizacion: {{ productDetail?.updateAt }}</p>
        <p>Stock: {{ productDetail?.stock }}</p>
        <p>Categoria: {{ productDetail?.category?.name }}</p>
        <img :src="productDetail.category?.image" alt="category image" />
        <p>Fecha de Categoria: {{ productDetail?.category?.creationAt }}</p>
        <p>
          Fecha de actualizacion de Categoria:
          {{ productDetail?.category?.updateAt }}
        </p>
      </div>
      <el-button type="primary" @click="goBack()">Volver</el-button>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Product } from "@/interfaces/producto";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  name: "ProductDetailView",
  setup(props, context) {
    const router = useRouter();
    const id = ref<string>(router.currentRoute.value.params.id as string);
    console.log("ProductDetailView: " + router.currentRoute.value.params.id);
    const productDetail = ref<Product>({} as Product);
    // arrow function para obtener el producto
    const getProduct = async () => {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id.value}`
      );
      productDetail.value = response.data;
    };
    getProduct();

    const goBack = () => {
      router.back();
    };

    return {
      id,
      goBack,
      productDetail,
      getProduct,
    };
  },
});
</script>

<style scoped>
.detalleView {
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 75%;
  max-width: 600px;
  padding: 20px;
}
img {
  width: 100%;
  object-fit: cover;
}

p {
  margin: 0;
  padding: 5px;
  max-width: 400px;
}

@media screen and (max-width: 768px) {
  .detalleView {
    flex-direction: column;
  }
}
</style>
