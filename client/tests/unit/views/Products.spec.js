import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Products from "@/views/Products.vue";
import ProductList from "@/components/ProductList.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Products", () => {
  let actions;
  let $store;
  let state;

  const push = jest.fn();
  const $router = {
    push: jest.fn(),
  };

  beforeEach(() => {
    // actions = {
    //   actionClick: jest.fn(),
    //   actionInput: jest.fn(),
    // };
    (state = {
      cartItems: [],
      loggedIn: false,
    }),
      ($store = new Vuex.Store({
        state,
        actions,
      }));
  });

  it("snapshot", () => {
    const wrapper = mount(Products, {
      stubs: {
        ProductList,
      },
      mocks: {
        $store: {
          state: {
            cartItems: [],
            loggedIn: false,
          },
        },
        $router,
      },
      data() {
        return {
          categories: [],
          products: [],
          cartItemsData: [],
        };
      },
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
