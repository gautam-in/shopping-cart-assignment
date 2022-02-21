<template>
  <section class="container">
    <div class="row">
      <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
        <img id="logo" src="../assets/images/logo.png" alt="logo" />
      </div>
      <div id="nav" class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-5">
        <router-link to="/">Home</router-link>
        <router-link :to="loggedIn ? '/products' : '/signin'"
          >Products</router-link
        >
      </div>
      <div id="cartContainer" class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="linkContainer">
          <router-link to="/signin">Sign In</router-link>
          <router-link to="/register">Register</router-link>
        </div>
        <div class="cartStyle">
          <img
            src="../assets/images/cart.svg"
            alt="cart"
            @click="openCart = !openCart"
          />
          {{ cartItems.length }} items
          <div class="badgeStyle">{{ cartItems.length }}</div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="openCart = false" v-if="openCart">
      <div
        class="cartModal"
        :class="cartItems.length == 0 ? 'backWhite' : 'backGrey'"
        @click.stop="openCart = true"
      >
        <div
          class="cartHeading"
          :style="cartItems.length == 0 ? 'text-align:center' : ''"
        >
          My Cart
          <span v-if="cartItems.length > 0">({{ cartItems.length }} item)</span>
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
                    loggedIn ? item.quantity-- : '';
                    processItems();
                  "
                ></button>
                <span> {{ item.quantity }} </span>
                <button
                  class="plusRoundBtn btnStyle"
                  @click="
                    loggedIn ? item.quantity++ : '';
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

        <div class="msgInfoContainer" v-if="cartItems.length > 0">
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

        <div
          class="checkoutContainer"
          :class="cartItems.length == 0 ? 'stickyBottom' : ''"
        >
          <p v-if="cartItems.length > 0">
            Promo code can be applied on Payment Page
          </p>
          <button
            class="btnStyle"
            :style="cartItems.length == 0 ? 'text-align:center' : ''"
          >
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
    <div
      class="cartModalMobile"
      :class="cartItems.length == 0 ? 'backWhite' : 'backGrey'"
      v-if="openCart"
    >
      <div
        class="cartHeading"
        :style="cartItems.length == 0 ? 'text-align:center' : ''"
      >
        My Cart
        <span v-if="cartItems.length > 0">({{ cartItems.length }} item)</span>
      </div>
      <div class="itemInfo" v-for="(item, ind) in cartItems" :key="ind">
        <div class="row" v-if="item.quantity !== 0">
          <div class="col-lg-3 col-xl-3 col-md-1 col-sm-2 col-2">
            <img
              :src="require('@/assets' + item.imageURL)"
              :alt="item.name"
              width="50"
            />
          </div>
          <div class="col-lg-7 col-xl-7 col-md-9 col-sm-8 col-8">
            <span>{{ item.name }}</span>
            <div class="incDecStyle">
              <button
                class="minusRoundBtn btnStyle"
                :disabled="item.quantity == 0"
                @click="
                  loggedIn ? item.quantity-- : '';
                  processItems();
                "
              ></button>
              <span> {{ item.quantity }} </span>
              <button
                class="plusRoundBtn btnStyle"
                @click="
                  loggedIn ? item.quantity++ : '';
                  processItems();
                "
              ></button>
              <span> x Rs.{{ item.price }} </span>
            </div>
          </div>

          <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2">
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
              width="100"
            />
          </div>
          <div>You won't find it cheaper anywhere</div>
        </div>
      </div>

      <div v-if="cartItems.length == 0" class="emptyCart">
        <p>No items in your cart</p>
        <span> Your favourite items are just a click away</span>
      </div>

      <div
        class="checkoutContainer"
        :class="cartItems.length == 0 ? 'stickyBottom' : ''"
      >
        <p v-if="cartItems.length > 0">
          Promo code can be applied on Payment Page
        </p>
        <button class="btnStyle">
          <div class="row" v-if="cartItems.length > 0">
            <div class="col-lg-9 col-xl-9 col-md-9 col-sm-9 col-9">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proceed to checkout
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
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  props: [""],
  data() {
    return {
      itemCount: 0,
      openCart: false,
      totalPrice: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.totalPrice = this.cartItems.reduce((acc, val) => {
        acc += val.quantity * val.price;
        console.log(acc);
        return acc;
      }, 0);
    });
  },
  watch: {},
  methods: {
    navigate() {
      if (this.$route.name !== "Products") {
        this.$router.push("/products");
      }
    },
    addToCart(item) {
      this.cartItems.push(item);
    },
    processItems() {
      if (this.loggedIn) {
        let arr = this.cartItems.filter((val) => !(val.quantity === 0));

        if (arr.length > -1) {
          axios.post("http://localhost:5000/addItems", arr).then((res) => {
            console.log(res.data);
          });
        }

        this.$store.dispatch("assignCartItems", arr);

        this.totalPrice = arr.reduce((acc, val) => {
          acc += val.quantity * val.price;
          console.log(acc);
          return acc;
        }, 0);
      } else {
        if (this.$route.name !== "Signin") {
          this.$router.push("/signin");
        }
      }
    },
  },
  computed: {
    cartItems: {
      get() {
        return this.$store.state.cartItems;
      },
      set() {},
    },
    loggedIn: {
      get() {
        return this.$store.state.loggedIn;
      },
      set() {},
    },
  },
};
</script>

<style scoped lang="scss">
#logo {
  float: right;
  padding: 5px;
}

#nav {
  float: left;
  padding: 3rem 10rem 0 0;

  a {
    margin-right: 25px;
  }
}
a {
  &.router-link-exact-active {
    color: #76726f;
  }
  color: #76726f;
  text-decoration: none;
  font-weight: 700;
}
.linkContainer {
  font-size: 12px;
  a {
    margin-left: 15px;
  }
  margin-bottom: 10px;
}
.cartStyle {
  position: relative;
  display: inline-block;
  height: 71%;
  padding: 13px 20px 0 20px;
  background: #eeeeee;
  img {
    position: relative;
    z-index: 2;
    cursor: pointer;
    height: 20px;
  }
  .badgeStyle {
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 10px;
    font-weight: bold;
    right: 71px;
    top: 6px;
    border-radius: 50%;
    position: absolute;
    color: #fff;
    background-color: red;
  }
}

@media only screen and (max-width: 767px) {
  #nav,
  .linkContainer {
    display: none;
  }

  .cartStyle {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 40px;
    }

    .badgeStyle {
      right: 93px;
      font-size: 12px;
      height: 20px;
      width: 20px;
      top: 24px;
    }
  }
}

@media only screen and (min-width: 767px) and (max-width: 990px) {
  .cartStyle {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 40px;
    }

    .badgeStyle {
      right: 121px;
      font-size: 12px;
      height: 20px;
      width: 20px;
      top: 24px;
    }
  }
}
</style>
