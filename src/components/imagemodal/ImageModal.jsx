import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "#0000009c",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ modalIsOpen, closeModal, selectedImage }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal Window"
    >
      <div className={css.imgContainer}>
        <img
          height="700px"
          className={css.img}
          id={selectedImage?.id}
          src={selectedImage?.urls.regular}
          alt={selectedImage?.alt_description}
        />

        <ul className={css.statContainer}>
          <li className={css.stat}>
            <span className={css.statName}>Author: </span>
            <span className={css.statValue}>{selectedImage?.user.name}</span>
          </li>
          <li className={css.stat}>
            <span className={css.statName}>Added on: </span>
            <span className={css.statValue}>{selectedImage?.created_at}</span>
          </li>
          <li className={css.stat}>
            <span className={css.statName}>Description: </span>
            <span className={css.statValue}>{selectedImage?.description}</span>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
