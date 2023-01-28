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
          <el-icon :size="30"> <Goods /> </el-icon> FAKE SHOP
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
