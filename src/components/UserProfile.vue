<template>
  <div>
    <el-card class="user-profile">
      <el-row>
        <el-col :span="24">
          <div class="clearfix">
            <el-avatar :src="user.avatar" :size="100"></el-avatar>
            <div class="user-info">
              <h2>{{ user.name }}</h2>
              <p>Email: {{ user.email }}</p>
              <p>Rol: {{ user.role }}</p>
              <p>Fecha de inscripción: {{ formatDate(user.creationAt) }}</p>
            </div>
          </div>
          <el-button type="primary" @click="$router.push('/products')">
            Volver a productos
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.user-profile {
  margin: 20px;
}

.user-info {
  display: inline-block;
  vertical-align: top;
}

/* El nombre de usuario tiene que tener un margen top para estar separado de la imagen y estar centrado*/
.user-info h2 {
  margin-top: 15px;
  text-align: center;
}

/* La información de usuario tiene que estar alineada a la izquierda */
.user-info {
  text-align: left;
}
</style>
