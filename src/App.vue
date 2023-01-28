<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { ref } from "vue";
import router from "@/router";
import NavBar from "./components/NavBar.vue";

let handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
var isAuthenticated = localStorage.getItem("token") !== null;
console.log(isAuthenticated);
var links = [
  { name: "Login", path: "/login", condition: !isAuthenticated },
  { name: "Productos", path: "/products", condition: isAuthenticated },
  { name: "Perfil", path: "/profile", condition: isAuthenticated },
];
console.log(links);

export default {
  name: "AppComponent",
  components: {
    NavBar,
  },
  data() {
    return {
      isAuthenticated: localStorage.getItem("token") !== null,
      links: isAuthenticated
        ? [
            { name: "Login", path: "/login", condition: !isAuthenticated },
            {
              name: "Productos",
              path: "/products",
              condition: isAuthenticated,
            },
            { name: "Perfil", path: "/profile", condition: isAuthenticated },
          ]
        : [
            { name: "Login", path: "/login", condition: !isAuthenticated },
            {
              name: "Productos",
              path: "/products",
              condition: isAuthenticated,
            },
            { name: "Perfil", path: "/profile", condition: isAuthenticated },
          ],
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
      this.refreshNavbar();
      router.push("/login");
    },
    refreshNavbar() {
      console.log("refreshNavbar");
      links = isAuthenticated
        ? [
            {
              name: "Productos",
              path: "/products",
              condition: isAuthenticated,
            },
            { name: "Perfil", path: "/profile", condition: isAuthenticated },
          ]
        : [{ name: "Login", path: "/login", condition: isAuthenticated }];
      console.log(links);
    },
  },
};
</script>
