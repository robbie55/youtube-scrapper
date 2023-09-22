import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={classes.header}>
      <h1>Youtube Word Search</h1>
      <p>
        The idea behind this app is pretty simple. Simply drop a youtube video
        link into the first input and a word into the second, and the app will
        return the number of times that word was said in the video!
      </p>
    </div>
  );
};

export default HomeHeader;
