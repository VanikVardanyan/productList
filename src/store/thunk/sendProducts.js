import basketApi from "../../api/productApi";
export const sendProductsRequest = (data) => async (dispatch) => {
  try {
    await basketApi().post("/add_basket.php", data);
  } catch (e) {
    console.log(e);
  }
};
