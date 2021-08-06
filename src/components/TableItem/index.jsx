import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePrice } from "../../store/action/products";

export const TableItems = ({ id, name, price, quantity, sum }) => {
  const [quantityProduct, setQuantityProduct] = useState(quantity);
  const dispatch = useDispatch();
  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    setQuantityProduct(value);
    dispatch(changePrice(id, value));
    console.log("ssssssssssssssss");
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input type="text" value={quantityProduct} onChange={handleChangeQuantity} />
      </td>
      <td>{sum}</td>
    </tr>
  );
};
