<template>
  <div class="home">
    <h1>PAGINA TO WAPA DE PRODUCTOS</h1>
    <div class="searchBar">
      <SearchBar />
    </div>
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/BarraBusqueda.vue";

export default {
  name: "ProductsView",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.searchBar {
  margin: 0 auto;
  width: 75%;
}
</style>
