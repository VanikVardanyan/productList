import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Table } from "../../components/Table";
import { getCorrectList } from "../../store/action/products";
import { correctlyItem, loadingSelector } from "../../store/selectors";

export const CorrectList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = useSelector(correctlyItem);

  useEffect(() => {
    dispatch(getCorrectList(location.pathname.slice(1)));
  }, [dispatch, location]);
  return <Table key={product.rid} name={product.rname} data={product.goods} total={product.total} />;
};
