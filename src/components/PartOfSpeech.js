import classes from "./PartOfSpeech.module.css";

function PartOfSpeech({ speech }) {
  return <div className={classes.speech}>{speech}</div>;
}

export default PartOfSpeech;
