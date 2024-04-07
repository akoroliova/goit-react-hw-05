import MovieList from "../../components/movielist/MovieList.jsx";
import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";

export default function MoviesPage({ onSearch, movies }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (topic.trim().length === 0) {
      toast("Please type your search request first!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <div className={css.moviesPageContainer}>
      <main>
        <div className={css.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              className={css.searchField}
              type="text"
              name="topic"
              autoComplete="off"
              autoFocus
            />

            <button type="submit">Search</button>
          </form>
          <Toaster />
        </div>

        {movies.length > 0 && <MovieList items={movies} />}
      </main>
      <footer></footer>
    </div>
  );
}
