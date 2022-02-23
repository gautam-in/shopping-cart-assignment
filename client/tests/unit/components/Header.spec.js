import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const localVue = createLocalVue();
localVue.use({
  Header,
  VueRouter,
  Vuex,
});

describe("Header", () => {
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
    const wrapper = mount(Header, {
      localVue,
      propsData: {
        cartItemsData: [],
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
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
