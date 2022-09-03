import { GET_PRODUCTS, GET_CATEGORIES } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const getProductsData = createAction(GET_PRODUCTS);

export const getCategoriesData = createAction(GET_CATEGORIES);
