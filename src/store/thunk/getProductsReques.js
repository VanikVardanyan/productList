import productApi from "../../api/productApi";
import { getProducts } from "../action/products";
import { LOADING } from "../actionTypes";

export const getProductsRequest = () => async (dispatch) => {
  try {
    const result = await productApi().get("get_products.php");
    dispatch({ type: LOADING, loading: true });
    dispatch(getProducts(result.data));
  } catch (e) {
    console.log(e);
    dispatch({ type: LOADING, loading: true });
  }
};
