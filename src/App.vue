<!-- <template>
  <nav class="container">
    <div class="Logo">
      <el-icon :size="30">
        <Goods />
      </el-icon>
      <div>FAKE SHOP</div>
    </div>
    <div class="Links">
      <router-link to="/login">Login</router-link> |
      <router-link to="/products">Productos</router-link> |
      <router-link v-if="isAuthenticated" to="/profile">Perfil</router-link>
    </div>
  </nav>
  <router-view />
</template> -->

<template>
  <nav class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item>
        <div class="Logo">
          <el-icon :size="30"> <Goods /> </el-icon> FAKE SHOP
        </div>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <router-link to="/login">Login</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/products">Productos</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link v-if="isAuthenticated" to="/profile">Perfil</router-link>
      </el-menu-item>
    </el-menu>
  </nav>
  <router-view />
</template>

<!-- 
<script lang="ts">
export default {
  data() {
    return {
      isAuthenticated: true,
    };
  },
  // Comprobar si el usuario está autenticado
  // y asignar el valor a la variable isAuthenticated
  mounted() {
    this.isAuthenticated = localStorage.getItem("token") !== null;
  },
};
</script>

<style>
nav {
  /* Establece una posición relativa para el contenedor del navbar */
  position: relative;
  /* Establece una altura fija para el contenedor del navbar */
  height: 100%;
  /* Centra los elementos dentro del contenedor del navbar */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  width: 100%;
  /* Establece la altura mínima del navbar */
  min-height: 60px;
  max-height: 100px;
  /* Establece una posición fija para el navbar */
  position: fixed;
  /* Asegura que el navbar siempre esté en la parte superior de la página */
  top: 0;
  /* Establece un fondo blanco para el navbar */
  background-color: #fff;
  /* Añade una sombra para darle profundidad al navbar */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.Logo {
  /* Establece un margen para el logo */
  margin-left: 30px;
  /* Agrupa el icono y el texto del logo */
  display: flex;
  align-items: center;
}

/* Ajustar el tamaño de las columnas en diferentes tamaños de pantalla */
@media (max-width: 575px) {
  .links {
    text-align: center;
  }
}
</style> -->

<!-- <template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item>
      <div class="Logo">
        <el-icon :size="30"> <Goods /> </el-icon> FAKE SHOP
      </div>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item v-if="!isAuthenticated" router-link to="/login" index="1"
      >Login</el-menu-item
    >
    <el-menu-item index="2">
      <router-link v-if="isAuthenticated" to="/products">Productos</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link v-if="isAuthenticated" to="/profile">Perfil</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link v-if="isAuthenticated" to="/profile">Logout</router-link>
    </el-menu-item>
  </el-menu>
</template> -->

<script lang="ts">
// import { ref } from "vue";

// const activeIndex = ref("1");
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
var isAuthenticated = true;

export default {
  data() {
    return {
      isAuthenticated: true,
    };
  },
  // Comprobar si el usuario está autenticado
  // y asignar el valor a la variable isAuthenticated
  mounted() {
    isAuthenticated = localStorage.getItem("token") !== null;
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
}

nav ul li {
  min-width: 100px !important;
  padding: 0 !important;
  text-decoration: none !important;
  list-style: none;
}

/* Ajustar el tamaño de las columnas en diferentes tamaños de pantalla */
@media (max-width: 575px) {
  nav ul {
    flex-direction: column;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>
