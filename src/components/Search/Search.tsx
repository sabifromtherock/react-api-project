import "./Search.scss";

type SearchProps = {
  setSearchTerm: (searchTerm: string) => void;
};

const Search = ({ setSearchTerm }: SearchProps) => {
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value.toLowerCase());
  };

  return (
    <form className="search-form">
      <label htmlFor="search" className="search-form__label">
        Search by Name:
      </label>
      <input
        type="text"
        id="search"
        className="search-form__input"
        onInput={handleFilter}
      />
    </form>
  );
};

export default Search;
