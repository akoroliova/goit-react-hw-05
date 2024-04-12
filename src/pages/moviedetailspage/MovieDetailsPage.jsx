import { useState, useEffect, Suspense } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../themoviedb-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const defaultImg = "https://via.placeholder.com/240x360";

  useEffect(() => {
    async function fetchData() {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        alert(error);
      }
    }

    if (movieId !== undefined) {
      fetchData();
    }
  }, [movieId]);

  if (movie === undefined) {
    return <div>Loading...</div>;
  }

  const genresList = movie.genres.map((genre) => genre.name);
  const genresString = genresList.join(", ");

  return (
    <main className={css.detailsPageContainer}>
      <Link to={backLinkHref} aria-label="Go back">
        &#8592; Go back
      </Link>

      <div className={css.generalInfoContainer}>
        <div className={css.moviePosterContainer}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt="Movie poster"
            width={250}
          />
        </div>

        <div className={css.generalInfoText}>
          <h1>{movie.title}</h1>
          <p>
            User score: {movie.vote_average} ({movie.vote_count} votes)
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </div>
      </div>

      <div className={css.additionalInfoContainer}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}
