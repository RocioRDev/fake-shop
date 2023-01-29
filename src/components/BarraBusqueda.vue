<template>
  <div class="search-container">
    <el-icon><Search /></el-icon>
    <el-input
      v-model="input"
      placeholder="Ingrese su búsqueda"
      type="text"
      suffix-icon="el-icon-search"
      @keyup.enter="$emit('clickedButton', input)"
    />
    <el-button type="primary" @click="$emit('clickedButton', input)"
      >Buscar</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElInput, ElButton } from "element-plus";
import { Product } from "@/interfaces/producto";
import axios from "axios";

export default defineComponent({
  name: "SearchBar",
  components: {
    ElInput,
    ElButton,
  },
  setup() {
    const input = ref("");

    return {
      input,
    };
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
