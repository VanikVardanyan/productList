import { GET_PRODUCTS, CHANGE_PRICE, GET_CORRECT_LIST } from "../actionTypes";

export const getProducts = (data) => ({
  type: GET_PRODUCTS,
  data,
});

export const changePrice = (id, quantity) => ({
  type: CHANGE_PRICE,
  id,
  quantity,
});

export const getCorrectList = (id) => ({
  type: GET_CORRECT_LIST,
  id,
});
