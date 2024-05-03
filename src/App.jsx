import { useEffect, useRef, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchProductsByQuery } from './services/Articles-API/articles-api';

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentPage, setCurrentPage] = useState (1)
  const [maxPage, setMaxPage] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalImage, setModalImage] = useState({});
  const btnRef = useRef(null)
  const [prevQuery, setPrevQuery] = useState("");

useEffect(()=>{
  if (!query) return;
  async function fetchSearch(){
    try {
      setIsLoading(true);
      const data = await fetchProductsByQuery(query, currentPage);
      

       setImages((prevImages) => {
        if (prevImages && query === prevQuery || currentPage !== 1) {
          return [...prevImages, ...data.results];
        } else {
          return [...data.results];
        }
      })
    

      setMaxPage(data.total_pages);
      setCurrentPage(currentPage);
    } catch (error) {
       setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  fetchSearch();
  },[query, currentPage])


  const handleSearch = (searchTerm) => {
    setPrevQuery(query)
    setQuery(searchTerm);
    setCurrentPage(1)
  };

  const handleLoadMore = () => {
    
    setCurrentPage(currentPage + 1);
      
  }
  // const handleLoadScroll=()=>{
  //   // btnRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  // }

function openModal(id) {
  setIsOpen(true);
  const image = images.find((img) => img.id === id); 
  setModalImage(image);
}
function closeModal() {
  setIsOpen(false);
}

  return (
    <>
    <SearchBar onSearch={handleSearch} />   
    <ImageGallery images = {images} openModal={openModal}/>
    {isError && <ErrorMessage />}    
    {currentPage >= 1 && currentPage < maxPage && maxPage !== null && <LoadMoreBtn rel={btnRef} onLoadMore={handleLoadMore} />}
    {isLoading && <Loader />}
    {(modalIsOpen)&&<ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalImage={modalImage}/>}

    </>
  )
}

export default App
