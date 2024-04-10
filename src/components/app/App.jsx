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
import "./App.module.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
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
    setMovies([]);
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
      <Navigation />

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
