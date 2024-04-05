import ImageCard from "../imagecard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal, setSelectedImage }) {
  function selectImage(
    id,
    urls,
    alt_description,
    created_at,
    description,
    user
  ) {
    setSelectedImage({
      id: id,
      urls: urls,
      alt: alt_description,
      created_at: created_at,
      description: description,
      user: user,
    });
  }

  return (
    <ul className={css.gallery}>
      {items.map(
        ({ id, urls, alt_description, created_at, description, user }) => (
          <li
            key={id}
            onClick={() =>
              selectImage(
                id,
                urls,
                alt_description,
                created_at,
                description,
                user
              )
            }
          >
            <ImageCard
              src={urls.small}
              alt={alt_description}
              openModal={openModal}
            />
          </li>
        )
      )}
    </ul>
  );
}
