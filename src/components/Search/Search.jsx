import React from "react";

export const Search = ({ setSearch, setPageNumber }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <form className="d-flex my-3" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{ width: 400 }}
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};
