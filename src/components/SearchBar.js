import React, { useState } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";

function SearchBar() {
  const [keyword, keywordState] = useState("");
  const [definition, definitionState] = useState("");
  const [audio, audioState] = useState("");

  const handleResponse = (response) => {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    definitionState(response.data[0]);
    audioState(response.data[0].phonetics[0].audio);
  };

  const search = (event) => {
    event.preventDefault();
    const language = `en_US`;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    keywordState(event.target.value);
  };

  //url: https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>

  return (
    <div className="search-bar">
      <form onSubmit={search}>
        <div className="field">
          <p className="control has-icons-right">
            <input
              className="input is-rounded is-large"
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-search"></i>
            </span>
          </p>
          <p className="help">
            Get definitions, synonyms, translations, and more
          </p>
        </div>
      </form>
      <SearchResults data={definition} audio={audio} />
    </div>
  );
}

export default SearchBar;
