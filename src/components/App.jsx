import './App.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import SearchBar from './SearchBar/SearchBar';

const handleSearch = searchTerm => {
  console.log(searchTerm);
};

function App() {
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ErrorMessage errorMsg="Server not found" />
    </>
  );
}

export default App;
