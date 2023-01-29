<template>
  <!-- Pasarle por props componente NavBar los links creados -->
  <NavBar
    :title="title"
    :links="links"
    :isAuthenticated="isAuthenticated"
    @onClick="logOut()"
    :componentKey="componentKey"
  />
  <router-view />
</template>

<script lang="ts">
import router from "@/router";
import NavBar from "./components/NavBar.vue";

var title = "FAKE SHOP";

let handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
var isAuthenticated = localStorage.getItem("token") !== null;
console.log(isAuthenticated);
var links = Array<{
  name: string;
  path: string;
  index: string;
}>();
var componentKey = 0;

export default {
  name: "AppComponent",
  components: {
    NavBar,
  },
  setup() {
    return {
      logOut: () => {
        localStorage.removeItem("token");
        isAuthenticated = localStorage.getItem("token") !== null;
        console.log("Funcion llamada: " + isAuthenticated + " " + componentKey);
        componentKey += 1;
        router.push("/login");
        window.location.reload();
      },
    };
  },
  data() {
    return {
      title: title,
      componentKey: componentKey,
      isAuthenticated: localStorage.getItem("token") !== null,
      links: isAuthenticated
        ? [
            {
              name: "Productos",
              path: "/products",
              index: "1",
            },
            {
              name: "Perfil",
              path: "/profile",
              index: "2",
            },
          ]
        : [
            {
              name: "Login",
              path: "/login",
              index: "1",
            },
          ],
    };
  },
  // Comprobar si el usuario está autenticado
  // y asignar el valor a la variable isAuthenticated
  mounted() {
    isAuthenticated = localStorage.getItem("token") !== null;
    console.log(isAuthenticated);
  },
};
</script>
