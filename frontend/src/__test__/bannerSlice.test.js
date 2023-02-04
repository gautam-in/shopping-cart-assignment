import { initialState, bannerSlice } from "../Features/banner/bannerSlice";
import axios from "axios";
describe("tests for bannerSlice", () => {
  test("initialize slice with initialValue", () => {
    const bannerSliceInit = bannerSlice(initialState, { type: "unknown" });
    expect(bannerSliceInit).toBe(initialState);
  });
});
