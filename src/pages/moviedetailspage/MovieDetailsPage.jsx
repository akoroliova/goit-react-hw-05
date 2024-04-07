import MovieCast from "../../components/moviecast/MovieCast";
import MovieReviews from "../../components/moviereviews/MovieReviews";

export default function MovieDetailsPage() {
  return (
    <div>
      <button aria-label="Go back"></button>
      <img />
      <h1>movie name</h1>
      <p>user score</p>
      <h2>Overview</h2>
      <p>overview text</p>
      <h2>Genres</h2>
      <p>genres list</p>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <MovieCast />
        <MovieReviews />
      </ul>
    </div>
  );
}
