import { ADD_TO_CART, UPDATE_CART } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction(ADD_TO_CART);

export const updateCartItems = createAction(UPDATE_CART);
