import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { links } from "../store/selectors";
import styles from "./index.module.scss";

export const Navbar = () => {
  const link = useSelector(links);
  return (
    <ul className={styles.linkList}>
      {link.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
