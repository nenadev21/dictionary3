import ResultDisplay from "./ResultDisplay";

function Results({ results, obtainedPhotos }) {
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

export default Results;
