import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = searchTerm => {
    console.log(searchTerm);
  };

  // useEffect(() => {
  //   async function fetchResponse() {
  //     const headersList = {
  //       Accept: '*/*',
  //       'Accept-Version': 'v1',
  //       Authorization: 'Client-ID o4C13rGbT_u5Vq3h83n03CpOGqwS0N_oj1Gd8F1ik0g',
  //     };
  //     const reqOptions = {
  //       url: 'https://api.unsplash.com/search/photos?query=grogu&per_page=3&page=1',
  //       method: 'GET',
  //       headers: headersList,
  //     };

  //     try {
  //       setLoading(true);
  //       const response = await axios.request(reqOptions);
  //       setResponse(response);
  //     } catch (error) {
  //       // Встановлюємо стан error в true
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchResponse();
  // }, []);

  // const ResponsePrint = ({ response }) => {
  //   const { data, headers } = response;
  //   const { total_pages, results } = data;
  //   //const { link } = headers;
  //   console.log(total_pages, results, headers);
  //   //console.log(response.headers['link']);

  //   return <h2>response print</h2>;
  // };
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
