<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>PAGINA DE PRODUCTOS</h1>
        <div class="searchBar">
          <!-- Barra de busqueda que devuelve lo que se ha escrito en ella -->
          <SearchBar
            :products="products"
            @clickedButton="alertaClick($event)"
          />
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

export default defineComponent({
  name: "ProductsView",
  components: {
    SearchBar,
    ProductoCard,
  },
  setup() {
    const products = ref<Product[]>([]);

    const updateProducts = (newProducts: Product[]) => {
      console.log("updateProducts: " + newProducts);
      products.value = newProducts;
    };

    const getProducts = async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      products.value = response.data;
    };

    const getProductsFilter = async (filter: string) => {
      if (filter.length < 3) {
        getProducts;
      } else {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?title=" + filter
        );
        products.value = response.data;
      }
    };

    getProducts();
    return {
      products,
      alertaClick: (test: string) => getProductsFilter(test),
      updateProducts,
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
