import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import { fetchResponse, fetchData } from '../unsplash-api';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

function App() {
  const [results, setResults] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const [imageModal, setImageModal] = useState({});
  const [emptySearch, setEmptySearch] = useState(false);
  const [queryUrl, setQueryUrl] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  //const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // const apiUrl = 'https://api.unsplash.com/search/photos';
  // const perPage = 15;

  // useEffect(() => {
  //   if (queryUrl === '') {
  //     return;
  //   }
  //   //console.log('queryUrl: ', queryUrl);
  //   async function getImages() {
  //     try {
  //       setLoading(true);
  //       const apiResponse = await fetchResponse(queryUrl);
  //       setResults(prevResults => {
  //         return [...prevResults, ...apiResponse.data.results];
  //       });
  //       // setResults(apiResponse.data.results);
  //       setNextUrl(getNextUrl(apiResponse.headers.link));
  //     } catch (error) {
  //       setError(true);
  //       handleAxiosError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getImages();
  // }, [queryUrl]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        const apiResponse = await fetchData(query, page);
        setResults(prevResults => {
          return [...prevResults, ...apiResponse.data.results];
        });
        setTotalPages(apiResponse.data.total_pages);
        console.log(apiResponse.data);
        console.log(apiResponse.data.total_pages);
      } catch (error) {
        setError(true);
        handleAxiosError(error);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  function openModal(img) {
    setImageModal(img);
    setImageModalIsOpen(true);
  }

  function closeModal() {
    setImageModal({});
    setImageModalIsOpen(false);
  }

  // function getNextUrl(input) {
  //   // console.log('input: ', input);

  //   if (input === undefined) {
  //     return '';
  //   }

  //   // https://poe.com/s/ZYwUlCDEFhdaAjupvpLF
  //   // Розбиваємо рядок на частини за комами
  //   const entries = input.split(',').map(entry => {
  //     // Витягуємо URL та rel
  //     const match = entry.match(/<([^>]+)>; rel="([^"]+)"/);
  //     if (match) {
  //       return {
  //         url: match[1],
  //         rel: match[2],
  //       };
  //     }
  //   });

  //   // Фільтруємо undefined значення (якщо є)
  //   const result = entries.filter(entry => entry !== undefined);
  //   // повертаємо об'єкт з rel="next"
  //   const nextUrl = result.find(entry => entry.rel === 'next')?.url;
  //   if (nextUrl === undefined) {
  //     return '';
  //   }
  //   return nextUrl;
  // }

  function handleAxiosError(error) {
    // https://rapidapi.com/guides/handle-axios-errors
    if (error.response) {
      // Request made but the server responded with an error
      // console.log('Request made but the server responded with an error');
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      setErrorMessage(
        `Request made but the server responded with an error: ${error.response.data}`
      );
    } else if (error.request) {
      // Request made but no response is received from the server.
      // console.log('Request made but no response is received from the server.');
      // console.log(error.request);
      setErrorMessage(
        `Request made but no response is received from the server. ${error.request}`
      );
    } else {
      // Error occured while setting up the request
      // console.log('Error:', error.message);
      setErrorMessage(
        `Error occured while setting up the request: ${error.message}`
      );
    }
  }

  const handleSearch = searchTerm => {
    //console.log(searchTerm);
    setError(false);
    setErrorMessage('');
    setNextUrl(undefined);
    setResults([]);
    setEmptySearch(false);
    //setQueryUrl(`${apiUrl}?query=${searchTerm}&per_page=${perPage}&page=1`);
    setQuery(searchTerm);
  };

  const handleLoadMore = () => {
    // console.log('load more btn click');
    setError(false);
    setErrorMessage('');
    //setQueryUrl(nextUrl);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    console.log('current page :', page);
  }, [page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {results.length > 0 && (
        <ImageGallery results={results} openModal={openModal} />
      )}
      {page < totalPages && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {loading && <Loader />}
      {error && <ErrorMessage errorMsg={errorMessage} />}
      {emptySearch && <p>No images found</p>}
      {imageModalIsOpen && (
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
