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
