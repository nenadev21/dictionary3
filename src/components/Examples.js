import classes from "./Examples.module.css";

function Examples({ examples }) {
  return <div className={classes.example}> {examples.example}</div>;
}

export default Examples;
