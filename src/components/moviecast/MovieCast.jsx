import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCast } from "../../themoviedb-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  const defaultImg = "https://via.placeholder.com/70x100";

  useEffect(() => {
    async function fetchData() {
      try {
        const castData = await fetchCast(movieId);
        setCast(castData);
      } catch (error) {
        alert(error);
      }
    }

    if (movieId !== undefined) {
      fetchData();
    }
  }, [movieId]);

  if (cast === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.castContainer}>
      <hr />
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castListItem}>
            <div className={css.actorPhotoContainer}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt="Actor photo"
                width={70}
              />
            </div>
            <h3 className={css.actorName}>{actor.name}</h3>
            <p className={css.actorCharacter}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
