import classes from "./YoutubeForm.module.css";

const YoutubeForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();

    props.storeLink(e.target[0].value);
    props.storeWord(e.target[1].value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input placeholder="Youtube Link" />
      <input placeholder="Word Query" />
      <button type="submit">Find</button>
    </form>
  );
};

export default YoutubeForm;
