import Navigation from "../../components/navigation/Navigation.jsx";
import MovieList from "../../components/movielist/MovieList.jsx";

export default function HomePage(buildLinkClass, movies) {
  return (
    <div className="homePageContainer">
      <Navigation buildLinkClass={buildLinkClass} />
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
}
