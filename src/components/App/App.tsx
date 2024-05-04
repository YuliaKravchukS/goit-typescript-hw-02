import { useEffect, useRef, useState } from "react";
import "./App.css";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import { fetchProductsByQuery } from "../../services/Articles-API/articles-api";
import { Image } from "./App.types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image>();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [prevQuery, setPrevQuery] = useState<string>("");

  useEffect(() => {
    if (!query) return;
    async function fetchSearch() {
      try {
        setIsLoading(true);
        const data = await fetchProductsByQuery(query, currentPage);

        setImages((prevImages) => [...prevImages, ...data.results]);

        setMaxPage(data.total_pages);
        setCurrentPage(currentPage);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearch();
  }, [query, currentPage]);

  const handleSearch = (searchTerm: string): void => {
    setPrevQuery(query);
    setQuery(searchTerm);
    setCurrentPage(1);
  };

  const handleLoadMore = (): void => {
    setCurrentPage(currentPage + 1);
  };
  // const handleLoadScroll=()=>{
  //   // btnRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  // }

  function openModal(id: number): void {
    setIsOpen(true);
    const image: Image | undefined = images?.find(
      (img: Image) => img.id === id
    );

    setModalImage(image);
  }
  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {isError && <ErrorMessage />}
      {currentPage >= 1 && maxPage !== null && currentPage < maxPage && (
        <LoadMoreBtn rel={btnRef} onLoadMore={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalImage={modalImage}
        />
      )}
    </>
  );
}

export default App;
