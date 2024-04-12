import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMoviesWithName, fetchTrending } from "../../themoviedb-api.js";
import { lazy, Suspense } from "react";
import clsx from "clsx";
import css from "./App.module.css";

const Navigation = lazy(() => import("../navigation/Navigation.jsx"));
const HomePage = lazy(() => import("../../pages/homepage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../../pages/moviespage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/moviedetailspage/MovieDetailsPage.jsx")
);
const MovieCast = lazy(() => import("../moviecast/MovieCast.jsx"));
const MovieReviews = lazy(() => import("../moviereviews/MovieReviews.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/notfoundpage/NotFoundPage.jsx")
);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [query, setQuery] = useState();

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.a, isActive && css.active);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setMovies([]);
        const moviesArray = await fetchMoviesWithName(query);
        setMovies([...movies, ...moviesArray]);
      } catch (error) {
        setMovies([]);
        alert(error);
      }
    }

    if (query !== undefined) {
      fetchData();
    }
  }, [query]);

  const handleSearch = async (topic) => {
    setQuery(topic);
  };

  async function getTrending() {
    const moviesTrendingArray = await fetchTrending();
    setMoviesTrending(moviesTrendingArray);
  }
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <Navigation buildLinkClass={buildLinkClass} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<HomePage moviesTrending={moviesTrending} />}
          />
          <Route
            path="/movies"
            element={<MoviesPage movies={movies} onSearch={handleSearch} />}
          ></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <footer>©️ All rights belong to their respective owners</footer>
    </>
  );
}
