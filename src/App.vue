<template>
  <nav>
    <div class="Logo">
      <el-icon :size="30">
        <Goods />
      </el-icon>
      <div>FAKE SHOP</div>
    </div>
    <router-link to="/login">Login</router-link> |
    <router-link to="/products">Productos</router-link> |
    <router-link to="/profile">Perfil</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Logo de la tienda siempre visible y a la izquierda */
nav .Logo {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  padding: 30px;
}
</style>
