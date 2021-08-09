import { useSelector } from "react-redux";
import { Table } from "../../components/Table";
import { products, loadingSelector } from "../../store/selectors";

export const HomePage = () => {
  const allProducts = useSelector(products);
  const loading = useSelector(loadingSelector);
  if (!loading) {
    return "...loading";
  }
  return (
    <div>
      {allProducts.map(({ rname, rid, goods, total }) => {
        return <Table key={rid} name={rname} data={goods} total={total} />;
      })}
    </div>
  );
};
