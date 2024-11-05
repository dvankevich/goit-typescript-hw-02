import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
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
    </>
  );
}

export default App;
