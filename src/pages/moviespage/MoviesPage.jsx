import MovieList from "../../components/movielist/MovieList.jsx";
import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage({ onSearch, movies }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedMovieName = searchParams.get("query") ?? "";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (topic.trim().length === 0) {
      toast("Please type your search request first!");
      return;
    }
    setSearchParams({ query: topic });
    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <main className={css.moviesPageContainer}>
        <div className={css.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              className={css.searchField}
              type="text"
              name="topic"
              autoComplete="off"
              defaultValue={searchedMovieName}
            />

            <button type="submit">Search</button>
          </form>
          <Toaster />
        </div>

        {movies.length > 0 ? (
          <MovieList items={movies} />
        ) : (
          <div>No movies found on that query</div>
        )}
      </main>
    </>
  );
}
