<template>
  <section id="signupContainer">
    <div class="container">
      <div class="row">
        <div class="signupInfo col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone</p>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
          <div class="mb-3 row">
            <label
              for="firstName"
              class="col-sm-2 col-lg-3 col-xl-3 col-md-3 col-form-label"
              >First Name</label
            >
            <div class="col-lg-4 col-xl-7 col-md-4 col-sm-10">
              <input
                v-model="$v.user.firstName.$model"
                type="text"
                class="form-control"
                id="firstName"
              />
              <div
                class="error"
                v-if="$v.user.firstName.$dirty && !$v.user.firstName.required"
              >
                First Name is required.
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label
              for="lastName"
              class="col-sm-2 col-lg-3 col-xl-3 col-md-3 col-form-label"
              >Last Name</label
            >
            <div class="col-lg-4 col-xl-7 col-md-4 col-sm-10">
              <input
                v-model="$v.user.lastName.$model"
                type="text"
                class="form-control"
                id="lastName"
              />
              <div
                class="error"
                v-if="$v.user.lastName.$dirty && !$v.user.lastName.required"
              >
                Last Name is required.
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label
              for="email"
              class="col-sm-2 col-lg-3 col-xl-3 col-md-3 col-form-label"
              >Email</label
            >
            <div class="col-lg-4 col-xl-7 col-md-4 col-sm-10">
              <input
                v-model="$v.user.email.$model"
                type="text"
                class="form-control"
                id="email"
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
            <label
              for="inputPassword"
              class="col-sm-2 col-lg-3 col-xl-3 col-md-3 col-form-label"
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
            <label
              for="confiemPassword"
              class="col-sm-2 col-lg-3 col-xl-3 col-md-3 col-form-label"
              >Confirm Password</label
            >
            <div class="col-lg-4 col-xl-7 col-md-4 col-sm-10">
              <input
                v-model="$v.user.confirmPassword.$model"
                type="password"
                class="form-control"
                id="confirmPassword"
              />
              <div
                class="error"
                v-if="
                  $v.user.confirmPassword.$dirty &&
                  !$v.user.confirmPassword.sameAsPassword
                "
              >
                Password is different.
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <div
              class="btnContainer col-lg-10 col-xl-12 col-md-4 col-sm-12 col-12"
            >
              <button
                @click="register()"
                :disabled="$v.$error || $v.user.$anyError"
                class="btnStyle"
                :class="$v.$error || $v.user.$anyError ? 'op07' : ''"
              >
                Signup
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
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Signup",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    user: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
      },
      password: {
        required,
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    register() {
      axios.post("http://localhost:5000/register", this.user).then((res) => {
        if (res.data.status == "success") {
          this.$router.push("/signin");
        }
      });
    },
  },
};
</script>

<style scoped>
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
  width: 62%;
}
</style>
