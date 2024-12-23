import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import { fetchData } from '../unsplash-api';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { AxiosError } from 'axios';
import { ImageModalProps, Img } from './types';

function App() {
  const [results, setResults] = useState<object[]>([]); // тут дуже складний об'єкт і не всі поля я буду використовувати, тому поставив тип object
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [imageModalIsOpen, setImageModalIsOpen] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<Img | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        setErrorMessage('');
        const apiResponse = await fetchData(query, page);
        console.log(apiResponse.data.results);

        setResults(prevResults => {
          return [...prevResults, ...apiResponse.data.results];
        });
        setTotalPages(apiResponse.data.total_pages);
      } catch (error) {
        setError(true);
        handleAxiosError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  function openModal(img: Img) {
    setImageModal(img);
    setImageModalIsOpen(true);
  }

  function closeModal() {
    setImageModal(null);
    setImageModalIsOpen(false);
  }

  function handleAxiosError(error: AxiosError) {
    // https://rapidapi.com/guides/handle-axios-errors
    if (error.response) {
      setErrorMessage(
        `Request made but the server responded with an error: ${error.response.data}`
      );
    } else if (error.request) {
      setErrorMessage(
        `Request made but no response is received from the server. ${error.request}`
      );
    } else {
      setErrorMessage(
        `Error occured while setting up the request: ${error.message}`
      );
    }
  }

  const handleSearch = (searchTerm: string) => {
    setResults([]);
    setQuery(searchTerm);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const isEmtpyResults = !loading && query && results.length === 0;

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {results.length > 0 && (
        <ImageGallery results={results} openModal={openModal} />
      )}
      {page < totalPages && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {loading && <Loader />}
      {error && <ErrorMessage errorMsg={errorMessage} />}
      {isEmtpyResults && <p>No images found</p>}
      {imageModalIsOpen && imageModal && (
        <ImageModal
          isOpen={imageModalIsOpen}
          closeModal={closeModal}
          img={imageModal}
        />
      )}
    </>
  );
}

export default App;
