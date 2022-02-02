import http from "./index";

const PREFIX = "/cart";

export const getCart = () => http.get(PREFIX);

// export const addToCart = (params: Record<string, any>) =>
//   http.post(PREFIX, params);

// export const editCart = (params: Record<string, any>) =>
//   http.put(PREFIX, params);

// export const removeFromCart = (params: Record<string, any>) =>
//   http.delete(PREFIX, { params });

//************API CAN BE USED IN FUTURE WITH REAL DATABASE********** */
