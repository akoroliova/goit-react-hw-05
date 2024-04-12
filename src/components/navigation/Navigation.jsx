import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation({ buildLinkClass }) {
  return (
    <>
      <header className={css.headerContainer}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <span>|</span>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
}
