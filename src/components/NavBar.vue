<template>
  <nav class="container" :key="componentKey">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
      :ellipsis="isMovile"
      :active-text-color="true ? '#ffd04b' : '#fff'"
      :class="isAuthenticated.toString()"
    >
      <el-menu-item>
        <div class="Logo">
          <el-icon :size="30"> <Goods /> </el-icon> {{ title }}
        </div>
      </el-menu-item>
      <div class="flex-grow" />

      <el-menu-item
        v-for="link in links"
        :key="link.name"
        :index="link.index"
        @click="handleSelect"
      >
        <!-- Mostrar la ruta con el link.name apuntando al link.path -->
        <router-link :to="link.path">{{ link.name }}</router-link>
      </el-menu-item>
      <el-menu-item
        v-if="isAuthenticated"
        :index="(links.length + 1).toString()"
        class="logout"
      >
        <!-- Boton de logout que llama a la funcion de logout -->
        <!-- <el-button @click="logOut" icon="el-icon-s-promotion"> -->
        <el-button @click="$emit('onClick', 'logOut')">Logout </el-button>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";

const componentKey = ref(0);
let title = "FAKE SHOP";
let activeIndex = "1";
// Comprobar si el dispositivo es movil
let isMovile = window.innerWidth < 768;

const forceRerender = () => {
  componentKey.value += 1;
  console.log("forceRerender: " + componentKey.value);
};

export default defineComponent({
  name: "NavBar",
  props: {
    title: {
      type: String,
      required: true,
      default: title,
    },
    links: {
      type: Array as PropType<Link[]>,
      required: true,
      default(): Array<{
        name: string;
        path: string;
        index: string;
      }> {
        return [
          { name: "Login", path: "/login", index: "1" },
          { name: "Productos", path: "/products", index: "2" },
          { name: "Perfil", path: "/profile", index: "3" },
        ];
      },
    },
    isMovile: {
      type: Boolean,
      required: true,
      default: isMovile,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
      default: false,
    },
    componentKey: {
      type: Number,
      required: true,
      default: componentKey.value,
    },
  },
  methods: {
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
    logOut() {
      localStorage.removeItem("token");
      this.refreshNavbar();
      this.$router.push("/login");
    },
    refreshNavbar() {
      console.log("refreshNavbar");
      // recargar la pagina con windows
      // window.location.reload();
      this.$forceUpdate();
    },
  },
});
</script>

<style scoped>
nav {
  width: 100% !important;
  min-height: 50px;
  background-color: coral;
}

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

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  font-weight: bold;
}

a {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
}

/* Boton de logout de las mismas dimensiones que los li*/
.logout {
  width: 100px;
  padding: 0 !important;
}

.logout-button:visited {
  color: white;
}

.flex-grow {
  min-width: 50px;
  flex-grow: 1;
}

.Logo {
  margin-left: 40px;
  display: flex;
  align-items: center;
}

.el-menu-demo {
  border-bottom: 1px solid #e4e4e4;
}

.el-menu-demo .el-menu-item {
  padding: 0 20px;
}

.el-menu-demo .el-menu-item.is-active {
  color: #ffd04b;
}

.el-menu-demo .el-menu-item.is-active .el-icon {
  color: #ffd04b;
}

.el-button {
  color: #fdfdfd;
  background-color: #545c64;
  border: none;
  padding: 0 !important;
  width: 100px;
  height: 56px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0 !important;
  cursor: pointer;
}
</style>
