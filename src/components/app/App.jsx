import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../searchbar/SearchBar";
import ImageGallery from "../imagegallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errormessage/ErrorMessage.jsx";
import LoadMoreBtn from "../loadmorebtn/LoadMoreBtn.jsx";
import ImageModal from "../imagemodal/ImageModal.jsx";
import { fetchImagesWithTopic } from "../../images-api.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState();
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function onLoadMoreClick() {
    setPage(page + 1);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const receivedData = await fetchImagesWithTopic(query, page);
        const totalPages = receivedData.total_pages;
        setShowLoadMoreBtn(totalPages && totalPages !== page);
        const imagesArray = receivedData.results;
        setImages([...images, ...imagesArray]);
      } catch (error) {
        setImages([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (query !== undefined) {
      fetchData();
    }
  }, [query, page]);

  const handleSearch = async (topic) => {
    setImages([]);
    setPage(1);
    setQuery(topic);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          items={images}
          openModal={openModal}
          setSelectedImage={setSelectedImage}
        />
      )}
      {loading && <Loader />}
      {showLoadMoreBtn ? <LoadMoreBtn onButtonClick={onLoadMoreClick} /> : null}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </>
  );
}

export default App;
