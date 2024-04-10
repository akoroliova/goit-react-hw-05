import MovieList from "../../components/movielist/MovieList.jsx";
import css from "./HomePage.module.css";

export default function HomePage({ moviesTrending }) {
  return (
    <>
      <main className={css.homePageContainer}>
        <h1>Trending today</h1>
        <MovieList items={moviesTrending} />
      </main>
    </>
  );
}
