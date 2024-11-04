import './App.css';
import SearchBar from './SearchBar/SearchBar';

const handleSearch = searchTerm => {
  console.log(searchTerm);
};

function App() {
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <h1>goit-react-hw-04</h1>
    </>
  );
}

export default App;
