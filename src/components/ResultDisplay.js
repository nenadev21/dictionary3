// import PhoneticsIcon from "./PhoneticsIcon";
import PartOfSpeech from "./PartOfSpeech";
import Definitions from "./Definitions";
import Examples from "./Examples";
// import Synonyms from "./Synonyms";

function ResultDisplay({ meaning }) {
  return (
    <div className="box m-4 p-4">
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
