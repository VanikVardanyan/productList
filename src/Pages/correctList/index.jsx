import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Table } from "../../components/Table";
import { products } from "../../store/selectors";
import styles from "./index.module.scss";
import HomeIcon from "../../assets/homeIcon.png";

export const CorrectList = () => {
  const [indexItem, setIndexItem] = useState(null);
  const location = useLocation();
  const allProducts = useSelector(products);

  useEffect(() => {
    const id = location.pathname.slice(1);
    allProducts.forEach((elem, index) => {
      if (elem.rid === id) {
        setIndexItem(index);
      }
    });
  }, [location, allProducts]);

  if (indexItem === null) {
    return "...loading";
  }

  return (
    <div>
      <Link className={styles.link} to="/">
        <img src={HomeIcon} alt="home" width="20" height="20" />
        <div>Home</div>
      </Link>

      <Table
        key={allProducts[indexItem].rid}
        name={allProducts[indexItem].rname}
        data={allProducts[indexItem].goods}
        total={allProducts[indexItem].total}
      />
    </div>
  );
};
