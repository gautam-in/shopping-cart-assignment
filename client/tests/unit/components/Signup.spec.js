import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Signup from "@/components/Signup.vue";
import Vuelidate from "vuelidate";
import Vue from "vue";
Vue.use(Vuelidate);
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use({
  Signup,
});

describe("Signup", () => {
  it("snapshot", () => {
    const wrapper = mount(Signup, {
      localVue,
      data() {
        return {
          user: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          },
        };
      },
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
