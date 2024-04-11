import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "../../themoviedb-api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        alert(error);
      }
    }

    if (movieId !== undefined) {
      fetchData();
    }
  }, [movieId]);

  if (reviews === undefined) {
    return <div>Loading...</div>;
  } else if (reviews.length === 0) {
    return <div>We don&apos;t have any reviews for this movie.</div>;
  }

  return (
    <div className={css.reviewsContainer}>
      <hr />
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewsListItem}>
            <h3 className={css.reviewerName}>Author: {review.author}</h3>
            <p className={css.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
