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
import { Category } from "@/interfaces/category";
import { defineComponent } from "vue";
import axios from "axios";

// Crear una nueva categoria de tipo Category con una imagen y fecha de creacion
const categoria: Category = {
  id: 1,
  name: "Categoria 1",
  image: "https://picsum.photos/200/300",
  creationAt: new Date().toDateString(),
};

// Crear un nuevo producto de tipo Product con varias imagenes y añadir la categoria
var producto1: Product = {
  id: 1,
  title: "Producto 1",
  description: "Descripcion del producto 1",
  price: 10,
  images: [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ],
  category: categoria,
};

// Crear un nuevo producto de tipo Product con varias imagenes y añadir la categoria
const producto2: Product = {
  id: 2,
  title: "Producto 2",
  description: "Descripcion del producto 1",
  price: 50,
  images: [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ],
  category: categoria,
};

var products: Product[];

// Lista de productos
const producto: Product[] = [producto1, producto2];

export default defineComponent({
  name: "ProductsView",
  components: {
    SearchBar,
    ProductoCard,
  },
  setup() {
    return {
      // Lista de productos obtenidos de la API
      products,
    };
  },
  // funcion para obtener los productos de la API
  async created() {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    products = response.data;
    console.log(products);
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
