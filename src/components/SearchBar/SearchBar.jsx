import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const showToast = () =>
    toast.error('search text must be longer than 2 characters');
  const handleSubmit = evt => {
    const form = evt.target;
    const searchTerm = form.elements.searchTerm.value.trim();
    evt.preventDefault();
    if (searchTerm.length < 3) {
      showToast();
    } else {
      onSubmit(searchTerm);
      form.reset();
    }
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="searchTerm"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
};

export default SearchBar;
