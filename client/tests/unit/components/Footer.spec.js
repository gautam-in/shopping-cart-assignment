import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

const localVue = createLocalVue();
localVue.use({
  Footer,
});

describe("Footer", () => {
  it("snapshot", () => {
    const wrapper = mount(Footer, {
      localVue,
    });
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains("div")).toBe(true);
  });
});
