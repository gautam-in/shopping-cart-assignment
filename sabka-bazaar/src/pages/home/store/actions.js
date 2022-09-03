import { GET_BANNERS, GET_CATEGORIES } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const getCarouselData = createAction(GET_BANNERS);

export const getCategoriesData = createAction(GET_CATEGORIES);
