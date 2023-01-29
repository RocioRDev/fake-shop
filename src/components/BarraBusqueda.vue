<template>
  <div class="search-container">
    <el-icon><Search /></el-icon>
    <el-input
      v-model="input"
      placeholder="Ingrese su búsqueda"
      type="text"
      suffix-icon="el-icon-search"
      @keyup.enter="submitSearch"
    />
    <el-button type="primary" @click="submitSearch">Buscar</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ElInput, ElButton } from "element-plus";

export default defineComponent({
  name: "SearchBar",
  components: {
    ElInput,
    ElButton,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    submitSearch() {
      console.log("Busqueda: " + this.input);
      // aquí puedes agregar la lógica para hacer la búsqueda con el valor del input `query`
    },
  },
});
</script>

<style scoped>
.search-container {
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.el-input__inner {
  border-radius: 0;
  flex-grow: 1;
}

.el-icon {
  margin-right: 10px;
}

.el-button {
  border-radius: 4px;
  margin-left: 10px;
}
</style>
