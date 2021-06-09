import ResultDisplay from "./ResultDisplay";

function Results({ results }) {
  if (results) {
    return (
      <div>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <ResultDisplay meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

// word_definition:
//     response.data[0].meanings[0].definitions[0].definition,
//   word_example: response.data[0].meanings[0].definitions[0].example,
//   word_definition2:
//     response.data[0].meanings[1].definitions[0].definition,
//   word_example2: response.data[0].meanings[1].definitions[0].example,
//   word_synonyms:
//     response.data[0].meanings[1].definitions[0].synonyms[0],
//   part_of_speech1: response.data[0].meanings[0].partOfSpeech,
//   part_of_speech2: response.data[0].meanings[1].partOfSpeech,
//   audio_link: response.data[0].phonetics[0].audio,

export default Results;
