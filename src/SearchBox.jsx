function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="br3 pa3 ba bg-light-blue mb5"
        type="search"
        placeholder="Search cat friend..."
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
