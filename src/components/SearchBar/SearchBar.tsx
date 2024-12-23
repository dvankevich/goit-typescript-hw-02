import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const showToast = () =>
    toast.error('search text must be longer than 2 characters');
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const form = evt.target as HTMLFormElement;
    //const searchTerm = form.elements.searchTerm.value.trim();
    const searchTerm: string = (
      form.elements.namedItem('searchTerm') as HTMLInputElement
    ).value.trim();
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
