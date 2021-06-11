import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

function SearchBar() {
  const [keyword, keywordState] = useState("");
  const [meaning, meaningState] = useState(null);
  const [photos, photosState] = useState(null);

  const handleResponse = (response) => {
    meaningState(response.data[0]);
    console.log(response.data[0]);
  };

  const handlePexelsResponse = (response) => {
    photosState(response.data.photos);
    console.log(response.data.photos);
  };

  const search = (event) => {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    const pexelsApiKey = `563492ad6f917000010000010c30336d2ecd45c39e23ae8557a649a4`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=15`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
  };

  const handleKeywordChange = (event) => {
    keywordState(event.target.value);
  };

  //url: https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>

  return (
    <div className="container">
      <h2 className="subtitle has-text-centered">
        {" "}
        What word do you want to look up?
      </h2>
      <form onSubmit={search}>
        <div className="field">
          <p className="control has-icons-right">
            <input
              className="input is-rounded is-medium"
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-search"> </i>
            </span>
          </p>
          <p className="has-text-centered">
            Get definitions, synonyms, translations, and more
          </p>
        </div>
      </form>
      <Results results={meaning} />
      <Photos photos={photos} />
    </div>
  );
}

export default SearchBar;
