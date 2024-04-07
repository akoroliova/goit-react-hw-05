import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import clsx from "clsx";
import { fetchMoviesWithName } from "../../themoviedb-api.js";
import Navigation from "../navigation/Navigation.jsx";
import HomePage from "../../pages/homepage/HomePage.jsx";
import MoviesPage from "../../pages/moviespage/MoviesPage.jsx";
import MovieDetailsPage from "../../pages/moviedetailspage/MovieDetailsPage.jsx";
import MovieCast from "../moviecast/MovieCast.jsx";
import MovieReviews from "../moviereviews/MovieReviews.jsx";
import NotFoundPage from "../../pages/notfoundpage/NotFoundPage.jsx";
import css from "./App.module.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const receivedData = await fetchMoviesWithName(query);
        const moviesArray = receivedData.results;
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
    setMovies([]);
    setQuery(topic);
  };

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <Navigation />
      <HomePage buildLinkClass={buildLinkClass} movies={movies} />
      <MoviesPage
        buildLinkClass={buildLinkClass}
        movies={movies}
        onSearch={handleSearch}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/:id/cast" element={<MovieCast />} />
        <Route path="/movies/:id/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
