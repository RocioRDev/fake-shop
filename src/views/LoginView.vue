<template>
  <div class="home">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/components/LoginForm.vue"; // @ is an alias to /src
import router from "@/router";
import axios from "axios";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
