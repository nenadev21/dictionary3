import classes from "./Definitions.module.css";

function Definitions({ definition }) {
  return <div className={classes.definition}>{definition.definition}</div>;
}

export default Definitions;
