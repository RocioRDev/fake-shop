<!-- <template>
  <div>
    <user-profile :user="userData" />
  </div>
</template>

<script lang="ts">
import UserProfile from "../components/UserProfile.vue";
import axios from "axios";

export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      userData: {
        id: "1",
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456",
        role: "user",
        avatar: "https://i.pravatar.cc/150?img=1",
        creationAt: "2020-01-01T00:00:00.000Z",
        updatedAt: "2020-01-01T00:00:00.000Z",
      },
    };
  },
  created() {
    this.loadUserData();
  },
  methods: {
    async loadUserData() {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          { headers }
        );
        this.userData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script> -->
