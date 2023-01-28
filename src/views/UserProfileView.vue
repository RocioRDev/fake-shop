<template>
  <div class="home">
    <h1>PAGINA TO WAPA DE PERFIL, NO DE LAO</h1>
    <UserProfile />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/components/LoginForm.vue"; // @ is an alias to /src

@Options({
  components: {
    LoginForm,
  },
})
export default class ProductsView extends Vue {}
</script>
