const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    const form = evt.target;
    evt.preventDefault();
    onSubmit(form.elements.searchTerm.value);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
