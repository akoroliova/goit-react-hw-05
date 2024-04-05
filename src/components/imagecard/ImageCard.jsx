import css from "./ImageCard.module.css";

export default function ImageCard({
  src,
  alt = "Image alternative text placeholder is empty",
  openModal,
}) {
  return (
    <div className={css.imageCardContainer}>
      <img src={src} alt={alt} className={css.image} onClick={openModal} />
    </div>
  );
}
