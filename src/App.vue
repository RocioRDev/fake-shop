<template>
  <nav class="container">
    <!-- Con modo vertical -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
      :ellipsis="true"
      :active-text-color="isAuthenticated ? '#ffd04b' : '#fff'"
    >
      <el-menu-item>
        <div class="Logo">
          <el-icon :size="30"> <Goods /> </el-icon> FAKE SHOP
        </div>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link v-if="isAuthenticated" to="/products"
          >Productos</router-link
        >
      </el-menu-item>
      <el-menu-item index="3">
        <router-link v-if="isAuthenticated" to="/profile">Perfil</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <!-- boton de logout que borra el token -->
        <el-button type="text" class="logout-button" @click="logOut"
          >Logout</el-button
        >
      </el-menu-item>
    </el-menu>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { ref } from "vue";
import router from "@/router";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
var isAuthenticated = true;

export default {
  data() {
    return {
      isAuthenticated: localStorage.getItem("token") !== null,
    };
  },
  // Comprobar si el usuario está autenticado
  // y asignar el valor a la variable isAuthenticated
  mounted() {
    isAuthenticated = localStorage.getItem("token") !== null;
    console.log(isAuthenticated);
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      isAuthenticated = false;
      router.push("/login");
    },
  },
};
</script>

<style>
nav {
  /* Establece una posición relativa para el contenedor del navbar */
  position: relative;
  /* Establece una altura fija para el contenedor del navbar */
  height: 100%;
  width: 100%;
  /* Centra los elementos dentro del contenedor del navbar */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Propiedad para quitar el subrayado, con un width de 100% y con el texto centrado*/
nav ul li a {
  text-decoration: none;
  width: 100%;
  text-align: center;
  color: "#fff" !important;
}

nav ul li {
  min-width: 100px !important;
  padding: 0 !important;
  text-decoration: none !important;
  list-style: none;
  color: "#fff" !important;
}

.el-popper {
  color: brown;
}

.flex-grow {
  flex-grow: 1;
}
</style>
