function MainDefinition({ definition, example }) {
  return (
    <div>
      <div className="main-definition">{definition} </div>
      <div className="example" style={{ fontStyle: "italic" }}>
        {" "}
        "{example}"{" "}
      </div>
    </div>
  );
}

export default MainDefinition;
