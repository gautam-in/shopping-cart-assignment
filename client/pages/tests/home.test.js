import React from "react";
import axios from "../../axios.config";
import { render } from "@testing-library/react";
import Home, { getServerSideProps } from "../home.page";
import { carouselData, categoriesList } from "../pages.mock";

jest.mock("../../axios.config", () => ({
  get: jest.fn(),
}));

describe("Home", () => {
  it("should render the component correctly", () => {
    const HomeComponent = render(<Home categoriesList={categoriesList} />);
    expect(HomeComponent).toMatchSnapshot();
  });

  it("getServerSideProps should run correctly", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: carouselData })
    );
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: categoriesList })
    );
    const response = await getServerSideProps();
    expect(response).toEqual({
      props: {
        carouselData,
        categoriesList,
      },
    });
  });
});
