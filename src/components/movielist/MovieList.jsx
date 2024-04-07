import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ items }) {
  return (
    <ul className={css.movieListContainer}>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`${item.id}`}>
            <p className={css.itemName}>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
