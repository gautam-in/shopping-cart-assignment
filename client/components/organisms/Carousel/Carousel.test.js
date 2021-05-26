import React from "react";
import { mount, shallow } from "enzyme";
import Carousel from "./Carousel";
import banners from "../../../../server/banners/index.get.json";

//Mock useState destructuring
const mockSetCurrentguess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentguess],
  useContext: (initialState) => [initialState, mockSetCurrentguess],
}));

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

const defaultProps = { offers: [] };

const setup = (props = []) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Carousel {...setupProps} />);
};

describe("Carousel activity", () => {
  test("Check if Carousel renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test("Empty offers props should not render any element", () => {
    const wrapper = setup();
    const corouselComponent = wrapper.find("[data-test='component-corousel']");
    expect(corouselComponent.length).toBe(0);
  });

  test("Non-empty offers props should render the component", () => {
    const props = {
      offers: [
        {
          bannerImageUrl: "/static/images/offers/offer1.jpg",
          bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
          isActive: true,
          order: 1,
          id: "5b6c38156cb7d770b7010ccc",
        },
        {
          bannerImageUrl: "/static/images/offers/offer2.jpg",
          bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
          isActive: true,
          order: 2,
          id: "5b6c38336cb7d770b7010ccd",
        },
      ],
    };
    const wrapper = setup(props);
    /* const corouselComponent = findByTestAttr(wrapper, "component-corousel"); */
    const corouselComponent = wrapper.find("[data-test='component-corousel']");
    expect(corouselComponent.length).toBe(1);
  });
  /* test("usestate controlled input field", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };

    inputBox.stimulate("change", mockEvent);
    expect(mockSetCurrentguess).toHaveBeenCalledWith("train");
  }); */
});

describe("Test Carousel with mount", () => {
  const offersProps = [
    {
      bannerImageUrl: "/static/images/offers/offer1.jpg",
      bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
      isActive: true,
      order: 1,
      id: "5b6c38156cb7d770b7010ccc",
    },
    {
      bannerImageUrl: "/static/images/offers/offer2.jpg",
      bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
      isActive: true,
      order: 2,
      id: "5b6c38336cb7d770b7010ccd",
    },
  ];
  test("Should not render if props offers in empty", () => {
    const wrapper = mount(<Carousel offers={[]} />);
    const selector = findByTestAttr(wrapper, "component-corousel");
    expect(selector.exists()).toBe(false);
  });

  test("Should not render Carousel if props is non-empty without error", () => {
    const wrapper = mount(<Carousel offers={offersProps} />);
    const selector = findByTestAttr(wrapper, "component-corousel");
    expect(selector.exists()).toBe(true);
  });

  test("Should display next image on click", () => {
    const wrapper = mount(<Carousel offers={offersProps} />);

    expect(findByTestAttr(wrapper, "carousel-image-0").length).toBe(1);
    expect(findByTestAttr(wrapper, "carousel-image-0").prop("alt")).toBe(
      "Independence Day Deal - 25% off on shampoo"
    );

    /* expect(
      findByTestAttr(wrapper, "carousel-image-0").prop("class")
    ).toHaveProperty("visibility", "visible");
 */
    /* findByTestAttr(wrapper, "next-button").simulate("click"); */
    expect(findByTestAttr(wrapper, "carousel-image-1").prop("alt")).toBe(
      "Independence Day Deal - Rs120 off on surf"
    );

    /* const selector = findByTestAttr(wrapper, "next-button");
    expect(selector.exists()).toBe(true); */
  });
});
