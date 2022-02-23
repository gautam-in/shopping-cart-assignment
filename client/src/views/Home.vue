<template>
  <div class="home">
    <Categories
      v-if="categories.length > 0"
      :banners="banners"
      :categories="categories"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from "../components/Categories.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Categories,
  },
  data() {
    return {
      banners: [],
      categories: [],
    };
  },
  created() {
    axios.get("http://localhost:5000/banners").then((res) => {
      this.banners = res.data;
    });

    axios.get("http://localhost:5000/categories").then((res) => {
      this.categories = res.data.filter((val) => val.imageUrl);
    });
  },
};
</script>

<style scoped>
.home {
  margin-top: 2rem;
}
</style>
