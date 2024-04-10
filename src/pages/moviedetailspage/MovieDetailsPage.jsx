import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../themoviedb-api";
import { Link, Outlet, useLocation } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const movie = await fetchMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        alert(error);
      }
    }

    if (movieId !== undefined) {
      fetchData();
    }
  }, [movieId]);

  return (
    <div className={css.detailsPageContainer}>
      <Link to={backLinkHref} aria-label="Go back">
        &#8592; Go back
      </Link>

      <div className={css.generalInfoContainer}>
        <div className={css.moviePosterContainer}>
          <img src="https://via.placeholder.com/240x360" alt="Movie poster" />
        </div>

        <div className={css.generalInfoText}>
          <h1>{movie.title}</h1>
          <p>User score: {}</p>
          <h2>Overview</h2>
          <p>overview text</p>
          <h3>Genres</h3>
          <p>genres list</p>
        </div>
      </div>

      <div className={css.additionalInfoContainer}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
