<template>
  <div class="signin">
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  name: "Signin",
  components: {
    Login,
  },
};
</script>

<style scoped>
.signin {
  margin-top: 2rem;
}
</style>
