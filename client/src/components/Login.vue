<template>
  <section id="loginContainer">
    <div class="container">
      <div class="row">
        <div class="loginInfo col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlish and Recommendations</p>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-lg-4 col-xl-7 col-md-4 col-sm-10">
              <input
                v-model="$v.user.email.$model"
                type="text"
                class="form-control"
                id="staticEmail"
              />
              <div
                class="error"
                v-if="$v.user.email.$dirty && !$v.user.email.required"
              >
                Email is required.
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >Password</label
            >
            <div class="col-lg-4 col-xl-7 col-md-4 col-sm-10">
              <input
                v-model="$v.user.password.$model"
                type="password"
                class="form-control"
                id="inputPassword"
              />
              <div
                class="error"
                v-if="$v.user.password.$dirty && !$v.user.password.required"
              >
                Password is required.
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <div
              class="btnContainer col-lg-10 col-xl-10 col-md-4 col-sm-12 col-12"
            >
              <button
                @click="onLogin()"
                :disabled="$v.$error || $v.user.$anyError"
                :class="$v.$error || $v.user.$anyError ? 'op07' : ''"
                class="btnStyle"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    onLogin() {
      axios.post("http://localhost:5000/users", this.user).then((res) => {
        if (res.data.status == "success") {
          this.$router.push({
            name: "Products",
            params: { registered: true },
          });
          this.$store.dispatch("assignLoggedIn", true);
        }
      });
    },
  },
};
</script>

<style scoped>
.loginInfo {
  padding-left: 10rem;
  text-align: initial;
}

p {
  font-size: 15px;
  margin-top: 1.5rem;
}

.col-form-label {
  text-align: initial;
}

.btnContainer {
  padding-left: 3.8rem;
}

button {
  width: 78%;
}
</style>
