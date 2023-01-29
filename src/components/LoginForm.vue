<template>
  <!-- Div con el formulario -->
  <div class="loginForm">
    <!-- Titulo del formulario -->
    <h1>Acceso a la tienda</h1>
    <!-- Formulario -->
    <el-form>
      <el-form-item label="Username">
        <el-input v-model="formInline.email" placeholder="Username" />
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input
          v-model="formInline.password"
          type="password"
          placeholder="Password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          round
          @click="$emit('onSubmit', 'onSubmit'), onSubmit()"
          >Acceder</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
import { reactive } from "vue";
import { computed } from "@vue/reactivity";
import router from "@/router";

// Validar el email
const emailRules = [required, email];
// Validar la contraseña
const passwordRules = [required, minLength(8)];

// Probar que el email y la contraseña son validos
const isValid = computed(() => {
  return (
    emailRules[1](formInline.email) && passwordRules[1](formInline.password)
  );
});

// usar reactive para hacer el form inline
const formInline = reactive({
  email: "",
  password: "",
});

// onSubmit usar axios para hacer el login
const onSubmit = () => {
  // validar el emial y la contraseña
  if (!isValid.value) {
    alert("Email o contraseña invalidos");
    return;
  }
  console.log("submit!");
  axios
    .post("https://api.escuelajs.co/api/v1/auth/login", {
      email: formInline.email,
      password: formInline.password,
    })
    .then((response) => {
      // Guardar el token en el localStorage
      localStorage.setItem("token", response.data.access_token);
      // Guardar el token en el estado de la app
      let access_token = response.data.access_token;
      //   const store = useStore();
      //   store.commit("setToken", response.data.access_token);
      // Redireccionar a la pagina de productos
      window.location.reload();
      router.push("/products");
    })
    .catch((error) => {
      alert("Usuario o contraseña incorrectos");
      console.log(error);
    });
};
</script>

<style scoped>
/* Centrar el formulario */
/* Con borde y sombreado */
/* Que sea responsive */
.loginForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 80%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 12px;
}
</style>
