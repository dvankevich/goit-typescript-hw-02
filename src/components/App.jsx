import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';

const handleSearch = searchTerm => {
  console.log(searchTerm);
};

function App() {
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ErrorMessage errorMsg="Server not found" />
      <ImageGallery />
      <Loader />
    </>
  );
}

export default App;
