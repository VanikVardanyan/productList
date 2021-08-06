import { useSelector } from "react-redux";
import { Table } from "../../components/Table";
import { products, loadingSelector } from "../../store/selectors";
import styles from "./index.module.scss";

export const HomePage = () => {
  const allProducts = useSelector(products);
  const loading = useSelector(loadingSelector);
  if (!loading) {
    return "...loading";
  }
  return (
    <div className={styles.wrapper}>
      {allProducts.map(({ rname, rid, goods, total }) => {
        return <Table key={rid} name={rname} data={goods} total={total} />;
      })}
    </div>
  );
};
