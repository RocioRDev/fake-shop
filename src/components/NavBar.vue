<template>
  <nav class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
      :ellipsis="true"
      :active-text-color="true ? '#ffd04b' : '#fff'"
    >
      <el-menu-item>
        <div class="Logo">
          <el-icon :size="30"> <Goods /> </el-icon> {{ title }}
        </div>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <router-link v-if="!true" to="/login">Login</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link v-if="true" to="/products">Productos</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link v-if="true" to="/profile">Perfil</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <el-button type="text" class="logout-button" @click="true"
          >Logout</el-button
        >
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

let title = "FAKE SHOP";

@Options({
  props: {
    title: {
      type: String,
      required: true,
      default: title,
    },
  },
})
export default class NavBar extends Vue {
  title!: string;
}
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

.logout-button {
  color: white;
  text-decoration: none;
}

.logout-button:visited {
  color: white;
}

.flex-grow {
  flex-grow: 1;
}

.Logo {
  margin-left: 60px;
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
</style>
