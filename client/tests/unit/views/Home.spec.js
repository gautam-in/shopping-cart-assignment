import { mount, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Categories from "@/components/Categories.vue";
import Vue from "vue";
import VueRouter from "vue-router";
const elem = document.createElement("div");
if (document.body) {
  document.body.appendChild(elem);
}
describe("Home", () => {
  it("snapshot", () => {
    const wrapper = mount(Home, {
      propsData: {
        banners: [],
        categories: [],
      },
      stubs: {
        Categories,
      },
      attachTo: elem,
    });
    expect(wrapper).toMatchSnapshot();
    wrapper.destroy();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
