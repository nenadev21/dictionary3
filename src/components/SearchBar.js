import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import axios from "axios";

function SearchBar() {
  const [keyword, keywordState] = useState("");
  const [meaning, meaningState] = useState({ ready: false });

  const handleResponse = (response) => {
    meaningState({
      ready: true,
      word_definition: response.data[0].meanings[0].definitions[0].definition,
      word_example: response.data[0].meanings[0].definitions[0].example,
      word_definition2: response.data[0].meanings[1].definitions[0].definition,
      word_example2: response.data[0].meanings[1].definitions[0].example,
      word_synonyms: response.data[0].meanings[1].definitions[0].synonyms[0],
      part_of_speech1: response.data[0].meanings[0].partOfSpeech,
      part_of_speech2: response.data[0].meanings[1].partOfSpeech,
      audio_link: response.data[0].phonetics[0].audio,
    });
    console.log(response.data[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const search = (event) => {
    const language = `en_US`;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    keywordState(event.target.value);
  };

  //url: https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>
  if (!meaningState.ready) {
    return (
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
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
            <p className="help" style={{ color: "white" }}>
              Get definitions, synonyms, translations, and more
            </p>
          </div>
        </form>
        <ResultDisplay data={meaning} />
      </div>
    );
  } else {
    search();
    return `loading...`;
  }
}

export default SearchBar;
