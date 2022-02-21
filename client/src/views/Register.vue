<template>
  <div class="register">
    <Signup />
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
export default {
  name: "Register",
  components: {
    Signup,
  },
};
</script>

<style scoped>
.register {
  margin-top: 2rem;
}
</style>
