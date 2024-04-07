import MovieList from "../../components/movielist/MovieList.jsx";

export default function HomePage(moviesTrending) {
  return (
    <div className="homePageContainer">
      <main>
        <h1>Trending today</h1>
        {moviesTrending.length > 0 && <MovieList items={moviesTrending} />}
      </main>
      <footer></footer>
    </div>
  );
}
