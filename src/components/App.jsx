import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import { fetchResponse } from '../unsplash-api';

function App() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = searchTerm => {
    console.log(searchTerm);
    async function getImages() {
      try {
        setLoading(true);
        const apiResponse = await fetchResponse();
        // console.log(apiResponse.data.results);
        // console.log(apiResponse.headers.link);
        // console.log(apiResponse.headers.link.length);

        // https://poe.com/s/ZYwUlCDEFhdaAjupvpLF

        const input = apiResponse.headers.link;

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

        //console.log(result);

        // Знаходимо об'єкт з rel="next"
        const nextUrl = result.find(entry => entry.rel === 'next')?.url;

        console.log(nextUrl);

        setResponse(apiResponse);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage errorMsg="Server not found" />}
      {/* <ResponsePrint response={response} /> */}

      <ImageGallery />
    </>
  );
}

export default App;
