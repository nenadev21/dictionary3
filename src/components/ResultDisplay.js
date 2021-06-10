// import PhoneticsIcon from "./PhoneticsIcon";
import PartOfSpeech from "./PartOfSpeech";
import Definitions from "./Definitions";
import Examples from "./Examples";
// import Synonyms from "./Synonyms";

function ResultDisplay({ meaning }) {
  console.log(`displaying ${meaning}`);

  return (
    <div className="search-results">
      <PartOfSpeech speech={meaning.partOfSpeech} />
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <Definitions definition={definition} />
              <br />
              <Examples examples={definition} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ResultDisplay;
