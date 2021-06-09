// import PhoneticsIcon from "./PhoneticsIcon";
import PartOfSpeech from "./PartOfSpeech";
import Definitions from "./Definitions";
import Examples from "./Examples";
// import Synonyms from "./Synonyms";

function ResultDisplay({ meaning }) {
  console.log(`displaying ${meaning}`);
  return (
    <div className="search-results" style={{ maxWidth: "800px" }}>
      <PartOfSpeech speech={meaning.partOfSpeech} />
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definitions definition={definition} />
            <Examples examples={definition} />
          </div>
        );
      })}
    </div>
  );
}

export default ResultDisplay;
