import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import { fetchResponse } from '../unsplash-api';

function App() {
  const [results, setResults] = useState([]);
  const [nextUrl, setNextUrl] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiUrl = 'https://api.unsplash.com/search/photos';
  const perPage = 15;

  function getNextUrl(input) {
    // https://poe.com/s/ZYwUlCDEFhdaAjupvpLF
    // Розбиваємо рядок на частини за комами
    const entries = input.split(',').map(entry => {
      // Витягуємо URL та rel
      const match = entry.match(/<([^>]+)>; rel="([^"]+)"/);
      if (match) {
        return {
          url: match[1],
          rel: match[2],
        };
      }
    });

    // Фільтруємо undefined значення (якщо є)
    const result = entries.filter(entry => entry !== undefined);
    // повертаємо об'єкт з rel="next"
    return result.find(entry => entry.rel === 'next')?.url;
  }

  const handleSearch = searchTerm => {
    //console.log(searchTerm);
    async function getImages() {
      try {
        setLoading(true);
        const apiResponse = await fetchResponse(
          `${apiUrl}?query=${searchTerm}&per_page=${perPage}&page=1`
        );
        setResults(apiResponse.data.results);
        setNextUrl(getNextUrl(apiResponse.headers.link));
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  };

  useEffect(() => {
    console.log(nextUrl);
  }, [nextUrl]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage errorMsg="Server not found" />}
      <ImageGallery />
    </>
  );
}

export default App;
