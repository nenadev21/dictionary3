function SecondaryDefinition({ definition2, example2 }) {
  return (
    <div>
      <div className="definition2">{definition2} </div>
      <div className="example2" style={{ fontStyle: "italic" }}>
        {" "}
        "{example2}"{" "}
      </div>
    </div>
  );
}

export default SecondaryDefinition;
