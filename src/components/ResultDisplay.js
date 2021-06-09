import PhoneticsIcon from "./PhoneticsIcon";
import PartOfSpeech from "./PartOfSpeech";
import MainDefinition from "./MainDefinition";
import SecondaryDefinition from "./SecondaryDefinition";
import Synonyms from "./Synonyms";

function SearchResults({ data }) {
  return (
    <div className="search-results" style={{ maxWidth: "500px" }}>
      <PartOfSpeech
        speech1={data.part_of_speech1}
        speech2={data.part_of_speech2}
      />
      <MainDefinition
        definition={data.word_definition}
        example={data.word_example}
      />
      <Synonyms synonyms={data.word_synonyms} />
      <SecondaryDefinition
        definition2={data.word_definition2}
        example2={data.word_example2}
      />
      <PhoneticsIcon audio={data.audio_link} />
    </div>
  );
}

export default SearchResults;
