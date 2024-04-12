import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMoviesWithName, fetchTrending } from "../../themoviedb-api.js";
import Navigation from "../navigation/Navigation.jsx";
import HomePage from "../../pages/homepage/HomePage.jsx";
import MoviesPage from "../../pages/moviespage/MoviesPage.jsx";
import MovieDetailsPage from "../../pages/moviedetailspage/MovieDetailsPage.jsx";
import MovieCast from "../moviecast/MovieCast.jsx";
import MovieReviews from "../moviereviews/MovieReviews.jsx";
import NotFoundPage from "../../pages/notfoundpage/NotFoundPage.jsx";

import clsx from "clsx";
import css from "./App.module.css";

//Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy та Suspense.

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

      <footer>©️ All rights belong to their respective owners</footer>
    </>
  );
}
