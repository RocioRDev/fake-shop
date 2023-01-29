<template>
  <div>
    <el-input
      :v-model="input"
      placeholder="Ingrese su búsqueda"
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
      console.log(this.input);
      // aquí puedes agregar la lógica para hacer la búsqueda con el valor del input `query`
    },
  },
});
</script>

<style scoped>
.el-input__inner {
  border-radius: 0;
}
</style>
