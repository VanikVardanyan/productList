import { useInView } from "react-intersection-observer";
import { TableItems } from "../TableItem";
import styles from "./table.module.scss";

import classnames from "classnames/bind";
import { useDispatch } from "react-redux";
import { sendProductsRequest } from "../../store/thunk/sendProducts";
import { normalizeFormData } from "../../common/normalizeFormData";

const cx = classnames.bind(styles);

export const Table = ({ name, data, total }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const dispatch = useDispatch();
  const handleToBasket = () => {
    const formData = normalizeFormData(data);
    dispatch(sendProductsRequest(formData));
  };

  return (
    <div className={styles.customTable_wrapper} ref={ref}>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название товара</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ gname, gprice, gid, quantity, sum, total }) => (
            <TableItems key={gid} id={gid} price={gprice} name={gname} quantity={quantity} sum={sum} total={total} />
          ))}
        </tbody>
      </table>
      <div className={cx("basket", inView && "basket_inView")}>
        total: {total}
        <button type="button" className={styles.basketBtn} onClick={handleToBasket}>
          basket
        </button>
      </div>
    </div>
  );
};
