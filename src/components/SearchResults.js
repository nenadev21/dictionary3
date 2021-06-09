import PhoneticsIcon from "./PhoneticsIcon";

function SearchResults({ data, audio }) {
  return (
    <div>
      <h1 className="title" style={{ color: "white" }}>
        {" "}
        {data.word}{" "}
      </h1>
      <PhoneticsIcon />
    </div>
  );
}

export default SearchResults;
