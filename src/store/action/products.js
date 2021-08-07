import { GET_PRODUCTS, CHANGE_PRICE } from "../actionTypes";

export const getProducts = (data) => ({
  type: GET_PRODUCTS,
  data,
});

export const changePrice = (id, quantity) => ({
  type: CHANGE_PRICE,
  id,
  quantity,
});
