import React from "react";

import "./SearchMovies.css";

const SearchMovies = (props) => {
  const { inputValue, setInputValue } = props;

  return (
    <>
      <form action="" className="form-search-movies">
        <input
          type="text"
          className="input-search-movies"
          placeholder="Nombre película"
        />
        <button className="button-search-movies">Buscar</button>
      </form>
    </>
  );
};

export default SearchMovies;
