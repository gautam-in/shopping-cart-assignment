import { mount, shallowMount } from "@vue/test-utils";
import Register from "@/views/Register.vue";
import Signup from "@/components/Signup.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

describe("Register", () => {
  it("snapshot", () => {
    const wrapper = mount(Register, {
      stubs: {
        Signup,
      },
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
