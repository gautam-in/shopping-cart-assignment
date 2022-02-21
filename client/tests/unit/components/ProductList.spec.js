import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";
import Vuelidate from "vuelidate";
import Vue from "vue";
Vue.use(Vuelidate);
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use({
  ProductList,
});

describe("ProductList", () => {
  it("snapshot", () => {
    const wrapper = mount(ProductList, {
      localVue,
      propsData: {
        products: [],
        categories: [],
        cartItemsData: [],
      },
      data() {
        return {
          user: {
            openCart: false,
            cartItems: [],
            totalPrice: 0,
          },
        };
      },
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
