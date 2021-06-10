// import PhoneticsIcon from "./PhoneticsIcon";
import PartOfSpeech from "./PartOfSpeech";
import Definitions from "./Definitions";
import Examples from "./Examples";
// import Synonyms from "./Synonyms";
import Card from "./ui/Card";
import classes from "./ResultDisplay.module.css";

function ResultDisplay({ meaning }) {
  console.log(`displaying ${meaning}`);

  return (
    <Card>
      <div className="results">
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
    </Card>
  );
}

export default ResultDisplay;
