import Card from "./ui/Card";

function Definitions({ definition }) {
  return (
    <Card>
      <div>
        <p style={{ color: "blue" }}>{definition.definition}</p>
      </div>
    </Card>
  );
}

export default Definitions;
