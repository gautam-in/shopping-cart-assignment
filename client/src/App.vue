<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
      <Header v-if="load" :cartItemsData="cartItems" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cartItems: [],
      load: false,
    };
  },
  created() {
    axios.get("http://localhost:5000/getItems").then((res) => {
      this.$store.dispatch(
        "assignCartItems",
        res.data.filter((val) => val.quantity !== 0)
      );
      this.load = true;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  box-shadow: 0 6px 6px -7px rgb(0 0 0 / 40%);
}

/* main {
  margin-top: 30px;
} */

footer {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  bottom: 0;
  left: 0;
  background-color: #eaeaea;
}
</style>
