import { mount } from "@vue/test-utils";
import Categories from "@/components/Categories.vue";
import Vue from "vue";
import VueRouter from "vue-router";

describe("Categories", () => {
  it("snapshot", () => {
    const wrapper = mount(Categories, {
      propsData: {
        banners: [],
        categories: [],
      },
    });
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.contains("div")).toBe(true);
  });
});
