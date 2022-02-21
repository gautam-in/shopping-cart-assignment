import { mount, shallowMount } from "@vue/test-utils";
import Signin from "@/views/Signin.vue";
import Login from "@/components/Login.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

describe("Signin", () => {
  it("snapshot", () => {
    const wrapper = mount(Signin, {
      stubs: {
        Login,
      },
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
