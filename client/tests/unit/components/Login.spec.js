import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Login from "@/components/Login.vue";
import Vuelidate from "vuelidate";
import Vue from "vue";
Vue.use(Vuelidate);
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use({
  Login,
});

const $route = {
  path: "/products",
};

describe("Login", () => {
  it("snapshot", () => {
    const loginMock = jest.fn(() => Promise.resolve());
    const wrapper = mount(Login, {
      localVue,
      data() {
        return {
          user: {
            email: "",
            password: "",
          },
        };
      },
      mocks: {
        $route,
      },
    });
    expect(wrapper).toMatchSnapshot();
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.$route.path).toBe($route.path);
    // expect(wrapper.contains("div")).toBe(true);
  });
});
