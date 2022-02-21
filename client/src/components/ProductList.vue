<template>
  <section id="productListContainer" class="container">
    <div class="row">
      <div class="categoryNav col-lg-3 col-md-3 col-xl-3 col-sm-12 col-12">
        <div class="row">
          <div
            v-for="(item, index) in categories"
            :key="index"
            class="navItem col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="categoryDrop col-lg-3 col-md-3 col-xl-3 col-sm-12 col-12">
        <select>
          <option v-for="(item, index) in categories" :key="index">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="col-lg-8 col-md-8 col-xl-8 col-sm-12 col-12">
        <div class="productLists row">
          <div
            v-for="(product, ind) in products"
            :key="ind"
            class="productContainer col-lg-3 col-xl-3 col-md-12 col-sm-12 col-12"
          >
            <div class="row">
              <div
                class="productName col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12"
              >
                <h6>{{ product.name }}</h6>
              </div>
              <div class="col-lg-12 col-xl-12 col-md-6 col-sm-6 col-6">
                <img
                  :src="require('@/assets' + product.imageURL)"
                  :alt="product.name ? product.name : 'product'"
                  class="productImage"
                />
              </div>
              <div class="col-lg-12 col-xl-12 col-md-6 col-sm-6 col-6">
                <div class="row">
                  <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
                    <div class="productDesc">{{ product.description }}</div>
                  </div>
                  <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
                    <div class="row priceInfo">
                      <div
                        class="productPrice col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12"
                      >
                        MRP Rs.{{ product.price }}
                      </div>
                      <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12">
                        <button
                          class="btnDesktop btnStyle"
                          :class="
                            cartItems.some(
                              (val) =>
                                val.id === product.id && val.quantity !== 0
                            )
                              ? 'op07'
                              : ''
                          "
                          @click="addToCart(product)"
                          :disabled="
                            cartItems.some(
                              (val) =>
                                val.id === product.id && val.quantity !== 0
                            )
                          "
                        >
                          Buy Now
                        </button>
                        <button
                          class="btnMobile btnStyle"
                          :class="
                            cartItems.some(
                              (val) =>
                                val.id === product.id && val.quantity !== 0
                            )
                              ? 'op07'
                              : ''
                          "
                          @click="addToCart(product)"
                          :disabled="
                            cartItems.some(
                              (val) =>
                                val.id === product.id && val.quantity !== 0
                            )
                          "
                        >
                          Buy Now @ Rs.{{ product.price }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="openCart = false" v-if="openCart">
      <div
        class="cartModal"
        :class="cartItems.length > 0 ? 'backGrey' : 'backWhite'"
        @click.stop="openCart = true"
      >
        <div class="cartHeading">
          My Cart <span v-if="cartItems.length > 0">(1 item)</span>
        </div>
        <div class="itemInfo" v-for="(item, ind) in cartItems" :key="ind">
          <div class="row" v-if="item.quantity !== 0">
            <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-12">
              <img
                :src="require('@/assets' + item.imageURL)"
                :alt="item.name"
                width="50"
              />
            </div>
            <div class="col-lg-7 col-xl-7 col-md-7 col-sm-12 col-12">
              <span>{{ item.name }}</span>
              <div class="incDecStyle">
                <button
                  class="minusRoundBtn btnStyle"
                  :disabled="item.quantity == 0"
                  @click="
                    item.quantity--;
                    processItems();
                  "
                ></button>
                <span> {{ item.quantity }} </span>
                <button
                  class="plusRoundBtn btnStyle"
                  @click="
                    item.quantity++;
                    processItems();
                  "
                ></button>
                <span> x Rs.{{ item.price }} </span>
              </div>
            </div>

            <div class="col-lg-2 col-xl-2 col-md-2 col-sm-12 col-12">
              <span>Rs.{{ item.price * item.quantity }}</span>
            </div>
          </div>
        </div>

        <div v-if="cartItems.length > 0" class="msgInfoContainer">
          <div class="messageInfo">
            <div>
              <img
                src="@/assets/images/lowest-price.png"
                alt="lowest price image"
                width="60"
              />
            </div>
            <div>You won't find it cheaper anywhere</div>
          </div>
        </div>

        <div v-if="cartItems.length == 0" class="emptyCart">
          <p>No items in your cart</p>
          <span> Your favourite items are just a click away</span>
        </div>

        <div class="checkoutContainer">
          <p v-if="cartItems.length > 0">
            Promo code can be applied on Payment Page
          </p>
          <button class="btnStyle">
            <div class="row" v-if="cartItems.length > 0">
              <div
                class="col-lg-9 col-xl-9 col-md-9 col-sm-9 col-9"
                style="text-align: left"
              >
                Proceed to checkout
              </div>
              <div class="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3">
                Rs.{{ totalPrice }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            <div v-else class="row">
              <div
                class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12"
                :style="cartItems.length == 0 ? 'text-align:center' : ''"
                @click="navigate()"
              >
                Start Shopping
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductList",
  props: ["products", "categories"],
  data() {
    return {
      openCart: false,
      totalPrice: 0,
    };
  },
  methods: {
    navigate() {
      if (this.$route.name !== "Products") {
        this.$router.push("/products");
      }
    },
    addToCart(item) {
      this.cartItems.push(item);
      axios
        .post("http://localhost:5000/addItems", this.cartItems)
        .then((res) => {
          console.log(res.data);
        });

      this.openCart = true;
    },
    processItems() {
      let arr = this.cartItems.filter((val) => val.quantity !== 0);

      if (arr.length > -1) {
        axios.post("http://localhost:5000/addItems", arr).then((res) => {
          console.log(res.data);
        });
      }
      this.$store.dispatch("assignCartItems", arr);
      this.totalPrice = arr.reduce((acc, val) => {
        acc += val.quantity * val.price;
        return acc;
      }, 0);
    },
  },
  computed: {
    cartItems: {
      get() {
        return this.$store.state.cartItems;
      },
      set() {},
    },
  },
};
</script>

<style scoped lang="scss">
h6 {
  font-size: 14px;
  font-weight: 600;
}

.categoryNav {
  background-color: #eaeaea;
}

.navItem {
  padding: 5px 5px 5px 30px;
  text-align: initial;
  border-bottom: 1px solid #acacac;
  color: #acacac;
  font-weight: 600;
}

.productLists {
  margin-top: 2rem;
}

.productContainer:not(:last-child) {
  margin-bottom: 3rem;
  border-bottom: 2px dotted #eee;
}

.productContainer {
  box-shadow: 5px 0 5px -7px rgb(0 0 0 / 50%);
}

.productDesc {
  display: inline-block;
  padding: 5px;
  // height: 30%;
  // overflow: auto;
  color: #4f4f4f;
  background-color: #f0f0f0;
  font-size: 12px;
  font-weight: bold;
  text-align: initial;
  margin-top: 1rem;
}

.priceInfo {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.priceInfo > div:first-child {
  font-size: 12px;
  font-weight: bold;
  line-height: 1.7rem;
}
</style>
