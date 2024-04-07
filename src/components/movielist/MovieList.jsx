import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ items }) {
  return (
    <ul className={css.movieListContainer}>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`${item.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3 className={css.itemName}>{item.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
