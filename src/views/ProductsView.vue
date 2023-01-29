<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>PAGINA TO WAPA DE PRODUCTOS</h1>
        <div class="searchBar">
          <SearchBar />
        </div>
      </el-header>
      <el-main>
        <div class="products-container">
          <ProductoCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
        <router-view />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/BarraBusqueda.vue";
import ProductoCard from "@/components/ProductoCard.vue";
import { Product } from "@/interfaces/producto";
import { defineComponent, ref } from "vue";
import axios from "axios";

const products = ref<Product[]>([]);

const getProducts = async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/products");
  products.value = response.data;
};

export default defineComponent({
  name: "ProductsView",
  components: {
    SearchBar,
    ProductoCard,
  },
  setup() {
    getProducts();
    return {
      products,
    };
  },
});
</script>

<style scoped>
.searchBar {
  margin: 0 auto;
  width: 75%;
}

.el-header {
  background-color: #b3c0d1;
  text-align: center;
  margin-bottom: 50px;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 75%;
}
</style>
