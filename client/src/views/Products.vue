<template>
  <div>
    <ProductList
      v-if="products.length > 0"
      :products="products"
      :categories="categories"
    />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import axios from "axios";
export default {
  name: "Products",
  components: {
    ProductList,
  },
  data() {
    return {
      categories: [],
      products: [],
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     console.log(from.name);

  //     if (
  //       (from.name !== "Signin" && vm.$route.name !== "Products") ||
  //       (from.name === "Signin" && !vm.$route.params.registered)
  //     ) {
  //       vm.$router.push("/signin");
  //     }
  //   });
  // },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/signin");
    }

    axios.get("http://localhost:5000/getItems").then((res) => {
      this.$store.dispatch(
        "assignCartItems",
        res.data.filter((val) => val.quantity !== 0)
      );
      this.load = true;
    });

    axios.get("http://localhost:5000/categories").then((res) => {
      this.categories = res.data.filter((val) => val.imageUrl);
    });

    axios.get("http://localhost:5000/products").then((res) => {
      res.data.forEach((val) => {
        val["quantity"] = 1;
      });

      this.products = res.data;
    });
  },
  computed: {
    loggedIn: {
      get() {
        return this.$store.state.loggedIn;
      },
      set() {},
    },
  },
};
</script>
