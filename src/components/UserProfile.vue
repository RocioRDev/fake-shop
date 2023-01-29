<template>
  <div>
    <el-card class="user-profile">
      <el-row>
        <el-col :span="24">
          <div class="clearfix">
            <el-avatar :src="user.avatar" :size="200"></el-avatar>
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
.el-avatar {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border: 4px solid #409eff;
}

.user-profile {
  margin: 20px;
  box-shadow: 10px 15px 10px 0 rgba(0, 0, 0, 0.1);
}

.user-info {
  width: 200px;
  display: block;
  margin: 0 auto;
}

.user-info h2 {
  margin-top: 15px;
  text-align: center;
}

.clearfix {
  margin-bottom: 35px;
}

.el-button {
  display: block;
  margin: 0 auto;
}

.user-info p {
  text-align: left;
}
</style>
